# EWSC MIS

A Management Information System for Eastern Water and Sewerage Company.

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

#### Connecting to Postgres database in docker from host machine

`psql -h localhost -p 5432 -d ewsc-mis -U postgres --password`

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

## Setting up development environment
