---
sidebar_position: 3
---

# Wi-Fi
Avoir uniquement des appareils Wi-Fi pour votre domotique peut sembler une solution simple, mais cela comporte plusieurs inconvénients importants à considérer. 📶

## Caractéristiques principales 📄
- **Portée limitée** : Le Wi-Fi a une portée plus courte par rapport à d'autres protocoles comme Zigbee ou Z-Wave, ce qui peut poser des problèmes dans les grandes maisons.
- **Consommation d'énergie élevée** : Les appareils Wi-Fi consomment généralement plus d'énergie, ce qui peut être un inconvénient pour les appareils alimentés par batterie.
- **Surcharge du réseau** : Avoir de nombreux appareils Wi-Fi peut saturer votre réseau domestique, entraînant des ralentissements et des interruptions de service.
- **Sécurité** : Bien que le Wi-Fi puisse être sécurisé, il est plus vulnérable aux attaques par rapport à des protocoles dédiés à la domotique.
- **Compatibilité** : Tous les appareils domotiques ne sont pas compatibles avec le Wi-Fi, ce qui peut limiter vos options.
- **Contrôleur** : Contrairement à Zigbee ou Z-Wave, le Wi-Fi ne nécessite pas de contrôleur dédié, mais cela peut entraîner une dépendance excessive à votre routeur Wi-Fi.

## Comment intégrer des appareils Wi-Fi dans Home Assistant ? 🏠
L'intégration des appareils Wi-Fi dans Home Assistant est généralement simple, car de nombreux appareils Wi-Fi sont compatibles nativement avec Home Assistant.    
Pafois il est nécessaire d'utiliser le cloud des fabricants, comme Tuya ou SmartThings, mais il existe parfois des intégrations locales (et plus complexes) pour éviter cela.

## En résumé, tu conseilles ? 🤔
Non pas vraiment, sauf quand c'est nécessaire, par exemple pour
- caméras de surveillance
- gros appareils types aspirateurs / splits connectés qui sont souvent en Wi-Fi
- appareils très éloignés et où la portée Wi-Fi est meilleure que Zigbee / Z-Wave