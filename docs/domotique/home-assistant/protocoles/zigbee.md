---
sidebar_position: 2
---

import YouTube from '@site/src/components/YouTube';

# Zigbee
Zigbee est un protocole de communication sans fil conçu pour les réseaux de capteurs et les applications domotiques.  
Il est largement utilisé dans les maisons intelligentes en raison de sa faible consommation d'énergie, de sa portée étendue et de sa capacité à connecter de nombreux appareils dans un réseau maillé.

## Caractéristiques principales 📄
- **Fréquence** : Opère principalement dans la bande de 2,4 GHz
- **Portée** : Environ 10 à 100 mètres, selon l'environnement et les obstacles
- **Topologie** : Réseau maillé, permettant aux appareils de relayer les messages
- **Consommation d'énergie** : Très faible, idéal pour les capteurs alimentés par batterie
- **Sécurité** : Utilise le chiffrement AES-128 pour sécuriser les communications
- **Prix** : Généralement abordable, avec de nombreux appareils disponibles à différents prix

## Comment intégrer Zigbee dans Home Assistant ? 🏠
Pour utiliser Zigbee avec Home Assistant, vous aurez besoin d'un **contrôleur Zigbee** (dongle USB ou passerelle) compatible.  
Selon le contrôleur que vous choisissez, l'intégration peut varier.  
Dans tous les cas, je vous recommande fortement d'utiliser le module complémentaire [Zigbee2MQTT](https://www.zigbee2mqtt.io/), qui offre une grande compatibilité avec divers appareils Zigbee.

### SMLight SLZB
<YouTube videoId="GmQzxH32xEQ" />
[Article sur mon site](https://aylabs.fr/video/ameliorer-son-reseau-zigbee)

L'avantage principal du [SLZB](https://aylabs.fr/produit/slzb-06m) c'est qu'il n'a pas besoin d'être connecté à la box Home Assistant. En effet vous le placez où vous voulez chez vous, à un endroit stratégique pour améliorer la portée de votre réseau Zigbee.  
Il suffira de connecter le contrôleur en Ethernet, et vous pourrez ensuite facilement créez votre réseau Zigbee avec Zigbee2MQTT.

### Sonoff Dongle

Plus traditionnel, le [Sonoff Zigbee 3.0](https://aylabs.fr/produit/sonoff-zigbee-3e) se branche directement sur la box Home Assistant.  
Selon la version, il peut être nécessaire de flasher le firmware pour utiliser Zigbee2MQTT.  
Il offre une bonne portée et une compatibilité avec de nombreux appareils Zigbee.
