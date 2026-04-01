# 🧱 Mur Porteur de Klarel - Site Troll

Un site de présentation humoristique sur Klarel, l'expert autoproclamé en destruction de murs porteurs ! 

**⚠️ ATTENTION : Ce site est une PARODIE. Ne détruisez JAMAIS un mur porteur sans consulter un professionnel qualifié !**

## 🚀 Démarrage avec Docker

### Prérequis
- Docker
- Docker Compose

### Installation et lancement

1. **Cloner le projet** (si ce n'est pas déjà fait)
```bash
git clone <votre-repo>
cd murporteurdeklarel
```

2. **Lancer avec Docker Compose**
```bash
docker-compose up --build
```

3. **Accéder au site**
Ouvrez votre navigateur sur : `http://localhost:5173`

### Commandes Docker utiles

- **Arrêter le conteneur**
```bash
docker-compose down
```

- **Reconstruire l'image**
```bash
docker-compose up --build
```

- **Voir les logs**
```bash
docker-compose logs -f
```

## 💻 Développement local (sans Docker)

Si vous préférez développer sans Docker :

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 🎨 Fonctionnalités

- ✨ Design moderne avec animations
- 🧱 Compteur de murs porteurs détruits en temps réel
- 💥 Services de démolition "premium"
- ⭐ Témoignages de clients (fictifs)
- 📊 Statistiques impressionnantes
- ❓ FAQ hilarante
- 📱 Responsive design

## 🛠️ Technologies utilisées

- **React** - Framework UI
- **Vite** - Build tool ultra-rapide
- **Docker** - Containerisation
- **CSS3** - Animations et effets

## 📝 Structure du projet

```
murporteurdeklarel/
├── src/
│   ├── App.jsx          # Composant principal
│   ├── App.css          # Styles de l'application
│   ├── main.jsx         # Point d'entrée React
│   └── index.css        # Styles globaux
├── public/
│   └── brick.svg        # Icône de brique
├── Dockerfile           # Configuration Docker
├── docker-compose.yml   # Orchestration Docker
├── vite.config.js       # Configuration Vite
└── package.json         # Dépendances npm
```

## 🎭 Mode Troll Activé

Ce site est une satire complète avec :
- Des services absurdes de démolition
- Des témoignages de clients "satisfaits"
- Des statistiques complètement inventées
- Une FAQ qui ne répond à rien sérieusement
- Des avertissements légaux partout

## ⚖️ Disclaimer

Ce projet est une œuvre humoristique. Les créateurs ne cautionnent en aucun cas la destruction de murs porteurs sans expertise professionnelle. Toute ressemblance avec des personnes réelles ou des situations existantes serait purement fortuite et hilarante.

## 📄 Licence

MIT - Faites-en ce que vous voulez, mais ne détruisez pas de murs porteurs !

---

**Fait avec 💀 et beaucoup d'irresponsabilité**

*Klarel™ décline toute responsabilité en cas d'effondrement, blessure, décès ou apocalypse architecturale.*
