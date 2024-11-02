# Projet React avec Create React App

Ce projet utilise `create-react-app` pour initialiser et gérer une application React. 

---
Voici les étapes pour installer et configurer le projet.

## Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) pour gérer les paquets JavaScript

## Installation

### Étape 1 : Installer Node.js et npm

Assurez-vous d'avoir Node.js et npm installés sur votre machine. Vous pouvez vérifier leurs versions avec les commandes suivantes :

```sh
node -v
npm -v
```

Si vous n'avez pas Node.js et npm installés, téléchargez-les depuis Node.js.

### Étape 2 : Créer une nouvelle application React
Pour créer une nouvelle application React, utilisez create-react-app. Exécutez la commande suivante dans votre terminal :

```sh
npx create-react-app
```
Remplacez nom-de-votre-projet par le nom de votre projet. Cette commande crée un nouveau dossier contenant tout le code nécessaire pour démarrer une application React.

### Étape 3 : Naviguer dans le répertoire de votre projet

```sh
cd nom-de-votre-projet
```

### Étape 4 : Démarrer l'application

Pour démarrer l'application en mode développement, exécutez :

```sh
npm start
```

Votre application sera accessible à l'adresse http://localhost:3000.

**Structure des dossiers**

*Voici une brève description de la structure des dossiers créée par create-react-app :*

`node_modules/` : Contient tous les modules dépendants installés via npm.

`public/` : Contient les fichiers statiques. index.html est le fichier principal.

`src/` : Contient le code source de l'application React.

`index.js` : Point d'entrée principal de l'application.

`App.js` : Composant racine de l'application.

`App.css` : Styles CSS pour le composant App.

`App.test.js` : Tests pour le composant App.

`logo.svg` : Logo React utilisé par défaut.

`index.css` : Styles globaux pour l'application.

`reportWebVitals.js` : Utilisé pour mesurer les performances de l'application.

`setupTests.js` : Configuration pour les tests avec Jest.

---

**Scripts disponibles**

*Dans le répertoire du projet, vous pouvez exécuter les commandes suivantes :*

```npm start```
Lance l'application en mode développement. Ouvrez http://localhost:3000 pour la voir dans le navigateur.

```npm test```
Lance le mode interactif de tests. Voir la section running tests pour plus d'informations.

```npm run build```
Construit l'application pour la production dans le dossier build. Il regroupe correctement React en mode production et optimise la build pour les meilleures performances.

---

**Déploiement**

Pour déployer l'application, vous pouvez utiliser des services comme *Vercel*, *Netlify* ou *GitHub Pages*.

Pour plus d'informations sur le déploiement, consultez la documentation de create-react-app [ici](https://create-react-app.dev/docs/deployment/).

Ressources supplémentaires

[Documentation officielle de React](https://legacy.reactjs.org/docs/getting-started.html)

[Documentation de Create React App](https://legacy.reactjs.org/docs/getting-started.html)
