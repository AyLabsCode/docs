# 🤝 Guide de Contribution à la Documentation AyLabs

Bienvenue ! Nous sommes ravis que vous souhaitiez contribuer à la documentation Domotique & Homelab d'AyLabs. Notre projet est 100% communautaire et Open Source.

Ce guide vous explique le processus à suivre pour soumettre vos modifications et articles.

## 🌟 Principes de Contribution

1.  **Respect et Bienveillance :** Toutes les contributions sont les bienvenues. Soyez respectueux envers les autres contributeurs et les modérateurs.
2.  **Un Sujet = Une PR :** Pour faciliter la relecture et la validation, chaque Pull Request (PR) doit concerner un seul sujet (une correction, un nouvel article, ou une mise à jour d'un outil spécifique).
3.  **Langue :** Toutes les documentations doivent être rédigées en **français**.

---

## 📝 Standards de Contenu et Règles Spécifiques

Afin de maintenir la neutralité et la qualité du contenu, les règles suivantes s'appliquent à toutes les contributions :

### Liens d'Affiliation

| Type de Contribution | Règle d'Affiliation |
| :--- | :--- |
| **Création d'un article COMPLET** | **Autorisé.** Si vous rédigez un guide ou une revue complète et détaillée sur un produit/service, vous pouvez y apposer **votre propre lien affilié unique et clairement identifié comme tel** à la fin de l'article ou dans une section dédiée. |
| **Modification/Correction mineure** | **Interdit.** L'ajout d'un lien affilié n'est pas permis pour de simples corrections, mises à jour ou modifications de contenu existant. |

### Contenu Multimédia

* Vous êtes autorisé à ajouter ou supprimer des **vidéos YouTube ou des liens vers des articles externes** si et seulement si leur contenu est **directement pertinent** et apporte une valeur ajoutée au sujet de l'article.

### Éthique et Qualité

* **Publicité Mensongère :** Il est strictement interdit d'insérer de la publicité mensongère, des informations trompeuses, ou de promouvoir des produits de manière déloyale.
* **Respect du Travail Existant :** Toute modification ou réécriture doit être constructive. Il est interdit de dénigrer ou de discréditer le travail d'un précédent contributeur dans les articles de documentation ou dans les commentaires de PR.

---

## 🚀 Le Processus de Contribution (Fork & Pull Request)

Notre workflow de contribution s'articule autour de **GitHub Flow** :

### Étape 1 : Fork et Clonage

Pour proposer des modifications, vous devez créer votre propre copie (un **fork**) du dépôt original.

1.  **Forkez** le dépôt : Rendez-vous sur la page GitHub du projet (`AyLabsCode/docs`) et cliquez sur le bouton **"Fork"** en haut à droite.
2.  **Clonez** votre fork en local sur votre machine. Remplacez `[VOTRE-NOM-UTILISATEUR]` par votre identifiant GitHub :

    ```bash
    git clone [https://github.com/](https://github.com/)[VOTRE-NOM-UTILISATEUR]/docs.git
    cd docs
    ```
3.  **Créez une branche** pour vos modifications. Nommez la branche de manière descriptive (`fix/nom-article-corrigé` ou `feat/nouvel-article-mqtt`) :

    ```bash
    git checkout -b fix/mise-a-jour-zigbee2mqtt
    ```

### Étape 2 : Développement et Tests

1.  **Modifiez les fichiers :** Rédigez ou modifiez le contenu dans le dossier `docs/`.
2.  **Testez en local :** Il est crucial de vérifier que votre documentation s'affiche correctement avant de soumettre la PR.
    ```bash
    # Installer les dépendances si ce n'est pas déjà fait
    yarn install
    # Lancer le serveur de développement Docusaurus
    yarn start
    ```

3. **Ajoutez votre nom aux contributeurs :** A la fin de chaque fichier .md se trouve une balise Authors
    ```js
    <Authors authors={["aylabs"]} />
    ```
    Si c'est votre première contribution, n'oubliez pas d'ajouter vos informations dans le fichier `docs/authors.yml`  
    Si vous n'êtes pas le premier contributeur, ajoutez votre nom en fin de liste.
4.  **Committez vos changements :** Utilisez des messages de commit clairs et concis.
    ```bash
    git add .
    git commit -m "fix: corriger l'étape 3 du guide Zigbee2MQTT"
    ```

### Étape 3 : Soumission de la Pull Request (PR)

1.  **Poussez la branche** sur votre fork GitHub :
    ```bash
    git push origin fix/mise-a-jour-zigbee2mqtt
    ```
2.  **Ouvrez une Pull Request (PR) :** Sur la page GitHub de votre fork, cliquez sur **"Compare & pull request"**.
    * Assurez-vous que vous demandez à fusionner de votre branche vers la branche `main` du dépôt AyLabsCode/docs.
    * Décrivez clairement les objectifs de votre PR dans le champ de description.

---

## 🤖 Vérification par la CI/CD

Une fois votre Pull Request soumise, un processus d'**Intégration Continue (CI)** s'exécutera une fois qu'un modérateur l'aura décidé.

Ce système a pour rôle de :

1.  **Vérifier la syntaxe :** S'assurer qu'il n'y a pas d'erreurs Docusaurus ou de Markdown.
2.  **Construire le site :** Tenter de générer une version complète du site pour s'assurer qu'il n'y a pas de liens cassés ou d'erreurs de build.

🚨 **Votre PR ne sera pas validée tant que les vérifications de la CI/CD ne sont pas au vert (✅).** Si la CI échoue, veuillez consulter les logs pour corriger le problème avant de repousser vos modifications.

## ✅ Validation Finale

Une fois que la CI/CD a réussi, les mainteneurs du dépôt AyLabs (Aymeric ou un modérateur) examineront votre code.

* Si des changements mineurs sont nécessaires, un commentaire sera laissé sur la PR.
* Si tout est conforme, votre contribution sera **fusionnée** (merged) dans la branche principale !

Merci encore pour votre aide et votre soutien au projet AyLabs !