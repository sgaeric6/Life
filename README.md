# Lagos Life Sim

A realistic multiplayer life-simulation game set in Lagos, Nigeria. Players create a character, choose a life path, travel around the city, meet other players, work, study, manage money, buy property, and build an empire.

## Features

- Welcome screen: "Welcome to Lagos"
- Character creator and style selection
- Real-time player matching in Lagos
- Explore city map and travel destinations
- Transportation: keke, taxi, bus, plane
- Nearby player detection and chat
- Social systems: friend requests, send money, block users
- Economy loop: work, study, pay fees, save, invest, buy property
- Life systems: education, health, energy, business, property, relationships
- 3D style with realistic city atmosphere

## Tech Stack

- Frontend: Next.js + React Three Fiber + Tailwind CSS
- Backend: Node.js + Express + Socket.io
- Database: PostgreSQL
- Cache: Redis
- ORM: Prisma

## Monorepo Structure

```text
Life/
├── frontend/
├── backend/
├── shared/
├── README.md
├── .gitignore
├── package.json
├── tsconfig.json
├── docker-compose.yml
├── .env.example
└── .gitignore
```

## Run locally

```bash
npm install
npm run dev
```

Frontend runs at: http://localhost:3000
Backend runs at: http://localhost:3001

## MVP Roadmap

- Landing page
- Sign up / login
- Character creator
- Lagos map
- Travel selector
- Nearby players
- Chat and notifications
- Wallet + transfers
- Work and study systems
- Property and business growth

## License

MIT
