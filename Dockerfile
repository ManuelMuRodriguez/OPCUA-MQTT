# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Listar archivos para verificar que todo se copió correctamente
RUN ls -la /usr/src/app

# Define el comando por defecto para ejecutar la aplicación
CMD ["node", "client-opcua-mqtt.js"]
