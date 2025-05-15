# Utiliser une image Node.js stable
FROM node:18

# Répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les deps
COPY package*.json ./

# Installer les dépendances (sqlite3 sera compilé pour Linux ici)
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]
