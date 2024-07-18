# Cliente OPC UA y Envío MQTT a Broker

Este proyecto consiste en un cliente desarrollado en Node.js que se conecta a un servidor OPC UA para leer variables específicas y enviarlas a un broker MQTT. Es útil para integrar datos provenientes de sistemas basados en OPC UA con aplicaciones que consumen datos a través de MQTT.

## Descripción
El cliente OPC UA establece una conexión con el servidor OPC UA especificado, lee las variables definidas en el archivo de configuración y publica los valores de estas variables en un tema MQTT.

## Requisitos
Antes de ejecutar el cliente, asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde nodejs.org.

## Configuración
Clonar el Repositorio:

- Copiar código
```ruby
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

- Instalar Dependencias:

- Copiar código
```ruby
npm install
```

- Configurar Variables de Entorno:

Crea un archivo .env en el directorio raíz del proyecto basado en el archivo .env.example. Puedes copiar el archivo .env.example y modificar los valores según sea necesario.

- Copiar código
```ruby
cp .env.example .env
```

- Edita el archivo .env y proporciona los valores correctos para las URLs del servidor OPC UA y del OCB.

- Ejecutar el Cliente:

### Para ejecutar el cliente OPC UA y comenzar a enviar datos a OCB, utiliza el siguiente comando:

- Copiar código
```ruby
node client-opcua-mqtt.js
```





## Ejecutar con docker

### Ejecutar Docker Compose

Para ejecutar tu aplicación con Docker Compose, abre una terminal, navega al directorio que contiene tu archivo docker-compose.yml y ejecuta el siguiente comando:

- Copiar código
```ruby
docker-compose up --build
```

- Tu archivo .env debe contener las variables de entorno necesarias:
```ruby
OPCUA_ENDPOINT_URL=opc.tcp://example.com:49320
MQTT_BROKER_URL=mqtt://example.com:1883
MAPPINGS_FILE_PATH=mappings.json
```
Este comando construirá la imagen Docker definida en tu Dockerfile, creará y arrancará el servicio definido en tu docker-compose.yml.