# Nuxt + Telefunc Starter

Look at the [Telefunc docs](https://github.com/brillout/telefunc) to learn more.

## Setup

Install the dependencies:

```bash
pnpm install
```

Setup prisma

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
DATABASE_URL="file:/Users/somewhere/nuxt-telefunc/prisma/dev.db" pnpm preview
```
