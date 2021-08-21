# PayPay Employee Feedback

This app is an attempt to fulfill the requirements for the code challenge for the role of Front-End Engineer at PayPay.

*Technologies/Frameworks/Libraries:*

#### Front End:
- NextJS (Fullstack React Framework) with TypeScript
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

Seed database: `prisma db seed --preview-feature`

Build project: `next build`

Start project: `next start` or Start project in dev mode: `next dev`

## Credentials

To view the application from the admin or employee role you can use these credentials:

Admin account :`admn.ppef@gmail.com` pw: `admin_1234`
Employee account: `employee.ppef@gmail.com` pw: `employee_1234`

## Assumptions








