---
sidebar_position: 4
---

# Synology

Il est possible d'installer Home Assistant sur un NAS de chez Synology compatible avec Docker (Container Manager) ou les machines virtuelles (Virtual Machine Manager).
Il est recommandé d'utiliser Home Assistant dans une VM.

## Installer Virtual Machine Manager ? ⚙️
Il faut se rendre dans le **Centre de paquets**, chercher puis installer le paquet **Virtual Machine Manager**.

## Comment installer Home Assistant dans une VM ? 🏠
Pour commencer, télécharger l'image .ova disponible sur le [site officiel de Home Assistant](https://www.home-assistant.io/installation/alternative) dans la rubrique **Download the appropriate image**.

Dans Virtual Machine Manager :
- Menu Machine virtuelle
- Bouton "Créer", clic sur la flèche, "Importer"
- Importer depuis des fichiers OVA
- Sélectionner l'image téléchargée précédemment
- Choisir le stockage
- Configurer la future VM, pour cela se référer aux recommandation de Home Assistant. Ces paramètres sont ajustables par la suite lorsque la machine est éteinte.
- Définir le stockage
- Définir le réseau (par défaut cela fonctionne très bien sur une installation standard)
- Mapper le péréphique USB (ex: clé controlleur zigbee) si nécessaire
- Définir les paramètres d'accès des utilisateurs Synology. A adapter en fonction de votre environnement
- Cocher la case "Mettre en marche la machine virtuelle après sa création"
- Patienter
- Machine virtuelle Home Assistant créée.

La machine sera visible dans le menu "Machine virtuelle", pour accéder à la console, il faut cliquer sur "Connecter" en haut de la fênetre.

<Authors authors={["anoratsu"]} />