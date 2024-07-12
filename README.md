# Cliente OPC UA y Envío MQTT

Este proyecto consiste en un cliente desarrollado en Node.js que se conecta a un servidor OPC UA para leer variables específicas y enviarlas a un broker MQTT. Es útil para integrar datos provenientes de sistemas basados en OPC UA con aplicaciones que consumen datos a través de MQTT, como Fiware Context Broker.

## Descripción
El cliente OPC UA establece una conexión con el servidor OPC UA especificado, lee las variables definidas en el archivo de configuración y publica los valores de estas variables en un tema MQTT. El propósito es facilitar la integración de dispositivos y sistemas que utilizan OPC UA con plataformas que consumen datos a través de MQTT, como Fiware Context Broker.

## Requisitos
Antes de ejecutar el cliente, asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde nodejs.org.

## Configuración
Clonar el Repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
Instalar Dependencias:

bash
Copiar código
npm install
Configurar Variables de Entorno:

Crea un archivo .env en el directorio raíz del proyecto basado en el archivo .env.example. Puedes copiar el archivo .env.example y modificar los valores según sea necesario.

bash
Copiar código
cp .env.example .env
Edita el archivo .env y proporciona los valores correctos para las URLs del servidor OPC UA y del broker MQTT.

Ejecutar el Cliente:

Para ejecutar el cliente OPC UA y comenzar a enviar datos a MQTT, utiliza el siguiente comando:

bash
Copiar código
node opcua-client-mqtt.js