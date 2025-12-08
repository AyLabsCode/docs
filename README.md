# AyLabs Docs

[![GitHub](https://img.shields.io/github/license/AyLabsCode/docs?style=for-the-badge)](./LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/AyLabsCode/docs?style=for-the-badge)](https://github.com/AyLabsCode/docs/graphs/contributors)
[![Docusaurus V2](https://img.shields.io/badge/Made%20with-Docusaurus%20v2-blue?style=for-the-badge)](https://docusaurus.io/)

👉 [https://docs.aylabs.fr](https://docs.aylabs.fr)

Bienvenue sur le dépôt officiel des documentations **AyLabs** ! Ce site a pour vocation de devenir la ressource de référence, centralisée et communautaire, pour tous les passionnés de **Domotique** et de **Homelab**.

## 🎯 Objectifs du Projet

Notre but est de fournir des guides, des astuces et des configurations toujours à jour, grâce à l'effort collectif.

* **Centralisation :** Regrouper toutes les connaissances de la chaîne AyLabs et de la communauté en un seul endroit facile d'accès.
* **Open Source :** Chaque article, chaque tutoriel est modifiable. La transparence est notre mot d'ordre.
* **Actualité Garantie :** Fini les guides obsolètes ! Le modèle communautaire garantit une mise à jour rapide lorsque les technologies évoluent.

---

## 🛠️ Comment Contribuer ? 

Ces documentations vivent grâce à vous. Si vous détectez une erreur, si un outil a été mis à jour, ou si vous avez une meilleure méthode, votre contribution est essentielle !

### 1. 🐛 Signaler un Problème

Si vous trouvez une erreur, un lien cassé, ou une information manquante, veuillez ouvrir une [Issue GitHub](https://github.com/AyLabs/docs-repo/issues/new/choose) pour le signaler.

### 2. ✍️ Proposer une Modification (Pull Request)

Vous souhaitez ajouter un nouveau guide ou corriger/améliorer un article existant ? Suivez ces étapes simples :

1.  **Forkez** ce dépôt.
2.  Clonez votre fork en local.
3.  Créez une nouvelle branche pour votre modification : `git checkout -b ma-super-contribution`.
4.  Effectuez vos modifications (les fichiers de documentation se trouvent principalement dans le dossier `docs/`).
5.  **Testez en local** (voir la section ci-dessous).
6.  Commitez vos changements et pushez-les sur votre fork.
7.  Ouvrez une **Pull Request** vers la branche `main` de ce dépôt.

Nous examinerons votre proposition dans les plus brefs délais !

---

## 🧑‍💻 Démarrer le Projet en Local

Pour visualiser la documentation ou tester vos contributions avant de soumettre une PR, vous pouvez lancer le site Docusaurus en local.

### Prérequis

* Node.js (version 18 ou supérieure recommandée)
* Yarn ou npm

### Installation et Lancement

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/AyLabsCode/docs
    cd docs
    ```

2.  **Installer les dépendances :**
    ```bash
    yarn install
    # ou
    npm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    yarn start
    # ou
    npm start
    ```

Le site sera accessible à l'adresse `http://localhost:3000`. Toute modification des fichiers sources (dans `docs/` ou `src/`) sera automatiquement rechargée.

---

## 📄 Licence

Ce projet est distribué sous licence **MIT**. Voir le fichier [LICENSE](./LICENSE) pour plus d'informations.

---

**Un grand merci à tous les contributeurs qui font vivre cette documentation !**