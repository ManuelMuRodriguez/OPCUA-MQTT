const opcua = require("node-opcua");
const mqtt = require("mqtt");
const fs = require("fs");
const path = require("path");
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

// Leer los mappings desde el archivo JSON
const mappings = JSON.parse(fs.readFileSync(path.join(__dirname, 'mappings.json'), 'utf8'));

// URL del servidor OPC UA y del broker MQTT desde el archivo .env
const endpointUrl = process.env.OPCUA_ENDPOINT_URL;
const mqttBrokerUrl = process.env.MQTT_BROKER_URL;

async function main() {
    try {
        // Crear el cliente OPC UA
        const client = opcua.OPCUAClient.create({ endpointMustExist: false });

        // Conectar al servidor OPC UA
        await client.connect(endpointUrl);
        console.log("Cliente conectado al servidor OPC UA");

        // Crear una sesión
        const session = await client.createSession();
        console.log("Sesión creada");

        // Conectar al broker MQTT
        const mqttClient = mqtt.connect(mqttBrokerUrl);
        mqttClient.on('connect', () => {
            console.log("Cliente MQTT conectado al broker");
        });

        // Leer las variables según los mapeos y enviar a MQTT
        setInterval(async () => {
            try {
                const timestamp = new Date().toISOString();
                const output = {};

                for (const mapping of mappings) {
                    const dataValue = await session.read({ nodeId: mapping.opcua_id, attributeId: opcua.AttributeIds.Value });
                    output[mapping.ocb_id] = {
                        value: dataValue.value.value,
                        timestamp: timestamp
                    };
                }

                // Log de los datos que se van a enviar
                console.log("Enviando los siguientes datos a MQTT:");
                console.log(JSON.stringify(output, null, 2));

                // Convertir output a JSON y enviar al broker MQTT
                mqttClient.publish('opcua-data', JSON.stringify(output));

            } catch (err) {
                console.log("Error al leer variables:", err.message);
            }
        }, 1000); // Intervalo de lectura cada segundo

    } catch (err) {
        console.log("Error al conectar con el servidor OPC UA:", err.message);
    }
}

main();
