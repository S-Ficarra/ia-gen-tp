# My Full-Stack Application

Ce projet est une application full-stack composée d'un backend en Node.js avec Express et SQLite, et d'un frontend en React. Le backend expose des endpoints pour gérer un compteur, tandis que le frontend affiche et interagit avec ce compteur.

## Prérequis

- Docker
- Docker Compose

## Instructions pour démarrer

### 1. Cloner le dépôt

Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo
```

### 2. Construire et démarrer les conteneurs

Utilisez Docker Compose pour construire et démarrer les conteneurs pour le frontend et le backend :

```bash
docker compose build --no-cache
docker compose up
```

### 3. Accéder aux applications

- **Frontend**: Accédez à `http://localhost:80` pour voir l'application React.
- **Backend**: Accédez à `http://localhost:3000` pour interagir avec les endpoints du backend.