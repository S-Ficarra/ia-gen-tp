# Étape 1 : build de l'app
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Vérification facultative
RUN ls -la dist

# Étape 2 : servir avec Nginx
FROM nginx:alpine
COPY ./dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
