FROM node:12.19.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8800
ENV JWT="8hEnPGeoBqGUT6zksxt4G95gW+uMdzwe7EVaRnp0xRI="
ENV MONGO_URL="mongodb+srv://Hamza:Hamza@project1.h2qskvb.mongodb.net/UrbanGarden?retryWrites=true&w=majority"

EXPOSE 8800

CMD [ "npm", "start" ]