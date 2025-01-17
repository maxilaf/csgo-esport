# **CSGO-ESPORT**

Voici le site CSGO-ESPORT réaliser en:
- FRONTENT : React
- BACKEND : Python (API)

# Installer le projet sur votre ordinateur

## Cloner le projet depuis GIT

Ouvrir un terminal dans le dossier ou vous souhaitez cloner le dépot GIT puis cloner le projet avec l'URL HTTP du projet :
```
git clone https://github.com/maxilaf/csgo-esport.git
```

## La partie FRONT-END
### *Prérequis*

Avoir d'installé sur sa machine :
- Node.js
- npm

### *Installation*
Aller dans le dossier du SITE puis dans le dossier `client` :
```
cd csgo-esport/client/
```
Puis installer les dépendances nécessaires :
```
npm install
```

## La partie BACK-END
### *Prérequis*

Avoir d'installé sur sa machine :
- Python

Revenez à la racine du projet (`cd ..`) puis aller dans le dossier `server` :

```
cd server/
```

Créer un **environnement virtuel** :
```
python -m venv .env
```

Activer ensuite l'environnement virtuel sur votre terminal :
```
source .env/Scripts/activate
```
Installer ensuite les **librairies PIP** :
```
pip install flask
pip install flask_cors
pip install hltv-async-api
```

# Executer le projet

### *Lancer le site*
Ouvrez un nouveau terminal dans le dossier client (`cd client` si vous etes à la racine du projet). <br>
Puis lancer le serveur local qui contiendra le site React (la partie front-end)
```
npm start run
```
Si le port `localhost:3000` est déja pris, vous pouvez :
- mettre le site sur le port `localhost:3001`
- Fermer le port `localhost:3000` :
```
netstat -ano | findstr :3000
taskkill /PID [nombre] /F
```
en remplaçant `[nombre]` par la suite de chiffre de la dernière colonne.

### *Lancer l'API*
Ouvrez un nouveau terminal dans le dossier server (`cd server` si vous etes à la racine du projet). <br>
Puis lancez l'API (la partie front-end) :
```
# flask --debug run
```
(si ça ne marche pas esseyez `flask --app app --debug run`)

ou directement sur le bouton `run` (forme de triangle sur le coté) en haut de VSCODE
