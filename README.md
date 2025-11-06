# Medtech Q&A Application

Une application Next.js TypeScript pour gérer les questions et réponses sur le monde de la medtech, avec une base de données PostgreSQL et Prisma ORM.

## 🚀 Fonctionnalités

- **Interface moderne** : Interface utilisateur élégante avec Tailwind CSS
- **Gestion des questions** : Ajout et consultation de questions/réponses sur la medtech
- **Catégorisation** : Classification des questions par catégories (Dispositifs médicaux, Diagnostic, etc.)
- **Base de données** : Stockage persistant avec PostgreSQL et Prisma
- **API REST** : API pour la gestion des données
- **TypeScript** : Typage fort pour une meilleure fiabilité

## 🛠️ Technologies utilisées

- **Frontend** : Next.js 16, React 19, TypeScript
- **Styling** : Tailwind CSS
- **Base de données** : PostgreSQL
- **ORM** : Prisma
- **Linting** : ESLint

## 📦 Installation

1. Clonez le repository :
```bash
git clone <your-repo-url>
cd medtech-qa-app
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez la base de données :
```bash
# Démarrer le serveur de base de données Prisma (si utilisation de Prisma local)
npx prisma dev

# Ou configurez votre propre base de données PostgreSQL dans .env
# DATABASE_URL="postgresql://username:password@localhost:5432/medtech_qa_db?schema=public"
```

4. Générez le client Prisma et synchronisez la base de données :
```bash
npx prisma generate
npx prisma db push
```

## 🚀 Utilisation

1. Démarrez le serveur de développement :
```bash
npm run dev
```

2. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

3. Utilisez l'application :
   - **Page d'accueil** : Ajoutez de nouvelles questions/réponses
   - **Page des questions** : Consultez toutes les questions enregistrées

## 📝 Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run start` : Démarre l'application en mode production
- `npm run lint` : Lance ESLint
- `npm run db:generate` : Génère le client Prisma
- `npm run db:push` : Synchronise le schéma avec la base de données
- `npm run db:migrate` : Crée et applique les migrations
- `npm run db:studio` : Lance Prisma Studio

## 🗄️ Structure de la base de données

### Table `medtech_questions`

| Champ | Type | Description |
|-------|------|-------------|
| `id` | String (CUID) | Identifiant unique |
| `question` | String | Texte de la question |
| `answer` | String | Réponse à la question |
| `category` | String (optionnel) | Catégorie de la question |
| `createdAt` | DateTime | Date de création |
| `updatedAt` | DateTime | Date de dernière modification |

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
DATABASE_URL="postgresql://username:password@localhost:5432/medtech_qa_db?schema=public"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

## 🏗️ Architecture

```
src/
├── app/
│   ├── api/
│   │   └── questions/
│   │       └── route.ts          # API routes pour les questions
│   ├── questions/
│   │   └── page.tsx               # Page d'affichage des questions
│   ├── globals.css                # Styles globaux
│   ├── layout.tsx                 # Layout principal
│   └── page.tsx                   # Page d'accueil
├── lib/
│   └── prisma.ts                  # Configuration Prisma
prisma/
├── schema.prisma                  # Schéma de base de données
└── prisma.config.ts              # Configuration Prisma
```

## 🎨 Catégories disponibles

- Dispositifs médicaux
- Diagnostic
- Thérapeutique
- Imagerie médicale
- Biotechnologie
- Réglementation
- Innovation
- Autre

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
