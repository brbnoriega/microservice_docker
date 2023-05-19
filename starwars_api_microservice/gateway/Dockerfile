#  toda la config de docker para indicarle sobre como armara la imagen que luego se va a levantar como si fuese un contenedor

#imagen creada previamente - archivos para correr NODE
FROM node:16 

WORKDIR /app

COPY package*.json ./

#instalacion de dependencias
RUN npm install

# origine- fuente  . -> es /app del contenedor 
COPY . .

#puertos a exponer/abrir
EXPOSE 8000

CMD ["npm", "start"]

