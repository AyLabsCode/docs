---
sidebar_position: 2
---

import YouTube from '@site/src/components/YouTube';

# Backups
Sauvegarder régulièrement votre configuration Home Assistant est crucial pour éviter toute perte de données en cas de problème. Voici comment effectuer des sauvegardes efficaces. 📦

## Système de sauvegarde intégré 🛠️
Home Assistant propose un système de sauvegarde intégré appelé "Snapshots" (instantanés). Pour créer une sauvegarde :
1. Allez dans **Paramètres** > **Système** > **Sauvegardes**.
2. Cliquez sur **Créer une sauvegarde**.
3. Choisissez les options souhaitées (tout sauvegarder ou seulement certaines parties).
4. Cliquez sur **Créer**.
5. Téléchargez la sauvegarde sur votre ordinateur pour plus de sécurité.

## Stockage sur Google Drive ☁️
<YouTube videoId="XMsyoy2Ketw" />

Pour automatiser les sauvegardes et les stocker sur Google Drive, vous pouvez utiliser l'add-on "Home Assistant Google Drive Backup". Voici comment l'installer :
1. Allez dans **Paramètres** > **Modules complémentaires** > **Boutique des modules complémentaires**.
2. Ajoutez le dépot [https://github.com/sabeechen/hassio-google-drive-backup](https://github.com/sabeechen/hassio-google-drive-backup) 
3. Configurez l'add-on en suivant les instructions pour connecter votre compte Google Drive.
4. Programmez des sauvegardes automatiques selon vos besoins.

## Stockage sur un NAS 💾
<YouTube videoId="v8A9H12vtiQ" />

Pour ceux qui possèdent un NAS (Network Attached Storage), il est possible de configurer Home Assistant pour y stocker les sauvegardes. Voici une méthode courante :
1. Allez dans **Paramètres** > **Système** > **Stockage**
2. Ajoutez un stockage réseau
3. Définissez le chemin d'accès à votre NAS et les informations d'identification nécessaires.
4. Configurez les sauvegardes pour qu'elles soient automatiquement envoyées vers le NAS.