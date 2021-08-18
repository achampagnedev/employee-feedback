# PayPay Employee Feedback

This app is an attempt to fulfill the requirements for the code challenge for the role of Front-End Engineer at PayPay.

*This project is using the following technologies/frameworks/libraries:*

#### Front End:
- NextJS (Fullstack React Framework)
- Next Auth (Authentication for NextJS)
- TailwindCSS (Utility class based CSS framework)

#### Back End:
- NextJS (Fullstack React Framework)
- Prisma (ORM compatible with PostgreSQL)
- PostgreSQL Database

#### Tools:
- Docker (container for the database)
- Prettier (code formatter)
- TypeScript (Javascript superset)

## Setup

Install all packages: `yarn install`

Install and run database in docker (installation: https://www.docker.com/products/docker-desktop): `docker run -p 5432:5432 --env POSTGRES_PASSWORD=password --name paypal-employee-feedback postgres:13.3-alpine`

Setup database:`prisma migrate dev`

Build project: `next build`
Start project: `next start`
Start project in dev mode: `next dev`






