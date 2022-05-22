# EWSC MIS

A Management Information System for Eastern Water and Sewerage Company.

## Technology Stack

### Backend

- Nodejs
- Expressjs
- Apollo GraphQL Server
- Postgres
- Cubejs

### Frontend

- Reactjs
- Apollo GraphQL Client
- Material UI

## Troubleshooting

- If you experience the `ssh: connect to host github.com port 22: Connection timed out` after you run `git push -u origin main`, then do following steps:

1. Run `ssh -T -p 443 git@github`.You will receive a message like `You've successfully authenticated, but GitHub does not provide shell access.`
2. Then run below commands:

   `$ # Override SSH settings`

   `$ vim ~/.ssh/config`

   ```bash
   # Add section below to it
   Host github.com
   Hostname ssh.github.com
   Port 443
   ```

   `$ ssh -T git@github.com`

3. After that, run `git push -u origin main`
