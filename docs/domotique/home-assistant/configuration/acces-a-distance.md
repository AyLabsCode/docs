---
sidebar_position: 1
---

import YouTube from '@site/src/components/YouTube';

# Accès à distance

## Nabu Casa Cloud
| 💰 Prix | 💪 Difficulté | 🔐 Sécurisé |
| - | - | - |
| 7.5€/mois | Facile | Oui |

**Tunnel** de connexion entre votre Home Assistant et les serveurs Nabu Casa.  
**Rien à configurer** sur la box  
[Documentation](https://support.nabucasa.com/hc/en-us/sections/26496346499997-Home-Assistant-remote-access)


## Cloudflared 
| 💰 Prix | 💪 Difficulté | 🔐 Sécurité |
| - | - | - |
| Il faut un nom de domaine | Moyenne | Oui, Tunnel chiffré |

<YouTube videoId="U1h5KfBF2Ys" />

Comme pour Nabu Casa Cloud, un tunnel se créé entre votre Home Assistant et les serveurs, ici Cloudflare.  
En bonus, Cloudflare **filtre** les requêtes, ce qui rend cette solution l'une des plus **sécurisée**.  
Un peu **technique** à configurer, mais en suivant pas à pas c'est faisable  

La vidéo de Howmation explique clairement la marche à suivre

## Ouverture de ports (et reverse-proxy)
| 💰 Prix | 💪 Difficulté | 🔐 Sécurisé |
| - | - | - |
| Gratuit | Difficile | Non (voire moyenne si bien configurée) |

<YouTube videoId="3gafoE_jkLI" />

Vraiment **pas recommandé** sauf pour tester.  
- Ouverture du port 8123 sur votre box.  
- Création d'un domaine chez [DuckDNS](https://www.home-assistant.io/integrations/duckdns/) 
- Mise en place d'un certificat Let's Encrypt

### Version un peu plus sécurisée
- Mise en place d'un reverse-proxy comme [Nginx Proxy Manager](https://nginxproxymanager.com/) dans Home Assistant
  - Possibilité d'ajouter des règles de filtrage sur NPM  
- Ouverture du port 443 uniquement
