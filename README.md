# Biggs Pools Competency Project

A React and Express website for pool and spa products, backed by MongoDB.

## Requirements

- Node.js and npm
- A MongoDB Atlas cluster and database user

## Configure MongoDB Atlas

1. In Atlas, create a database user and allow your current IP address under **Network Access**.
2. Copy the connection string from **Connect → Drivers**. Replace the username, password, and cluster host placeholders. URL-encode special characters in the database password.
3. Copy `.env.example` to `.env` in either the project root or `server/`, then set `MONGODB_URI` in `.env` to your Atlas connection string. Keep `.env` private; it is ignored by Git.

The example URI uses the database name `biggs-pools`; change it if you want to use another database.

## Start the server

```bash
cd server
npm install
npm start
```

The API listens on `http://localhost:4000` after it connects to MongoDB. Check `http://localhost:4000/health` for the server health response.

## Start the client

In a second terminal, from the project root:

```bash
cd client
npm install
npm start
```

Open `http://localhost:3000`. The development client proxies API requests to the server on port 4000.

## Optional: load sample products

If the chosen database has no product records, run `npm run seed` from `server/`. The command inserts sample products only when the products collection is empty; it does not delete or overwrite existing products or users. New user accounts can be created through the site.
