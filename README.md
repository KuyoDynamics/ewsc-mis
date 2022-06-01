# EWSC MIS

A Management Information System for Water and Sewerage Utility Companies.

## Technology Stack

### Backend

- Nodejs `v16.13.1`
- Expressjs `4.18.1`
- Apollo Server `v3.7.0`
- GraphQL `v16.5.0`
- Prisma `^3.14.0`
- Postgres `14.3`
- Cubejs
- NPM `8.5.5`

#### Up and Running

1. Copy this example config and paste it into your `.env` file in the `server/` directory:

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ewsc-mis?schema=public"
Connecting to Postgres database in docker from host machine
```

1. `cd` into `/server` and run `npm install`

2. While in `/server`, spin-up the postgres docker container:

   `sudo docker compose up`

3. Open new terminal tab and connect to your database via `psql`:

   `psql -h localhost -p 5432 -d ewsc-mis -U postgres --password`

4. In a separate terminal apply the database migrations and seed the database via:

   `npx prisma migrate dev`

5. In another terminal tab, start the `server` by running the following command:

   `npm run dev`

6. Visit `http://localhost:4000/graphql` to explore and start querying the `ewsc-mis` graphql api.

### Frontend

- Reactjs
- Apollo GraphQL Client
- Material UI
- Rechartjs

## Troubleshooting

- If you are using `zsh` and you experience the `ssh: connect to host github.com port 22: Connection timed out` after you run `git push/fetch/clone`, then do following steps:

1. Open .zshrc in a text editor
   `vim ~/.zshrc`
2. Add ssh-agent to the plugins list and save:

   `plugins=(git ssh-agent)`

3. You may want to immediately reload your .zshrc settings:
   `source ~/.zshrc`
