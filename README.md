# PayPay Employee Feedback

This app is an attempt to fulfill the requirements for the code challenge for the role of Front-End Engineer at PayPay.

## Technologies/Frameworks/Libraries:

#### Front End:
- NextJS (Fullstack React Framework) with TypeScript
- Next Auth (Authentication for NextJS)
- TailwindCSS (Utility class based CSS framework)
- Sharp (Image Optimization tool recommended for NextJS)

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

In a **new tab**, Install and run database in docker (installation: https://www.docker.com/products/docker-desktop): `docker run -p 5432:5432 --env POSTGRES_PASSWORD=password --name paypal-employee-feedback postgres:13.3-alpine`

Setup database:`yarn prisma migrate dev` press `y` to accept creation of new database `paypay-employee-feedback`

Seed database: `yarn prisma db seed --preview-feature`

Build project: `yarn build`

Start project: `yarn start` or Start project in dev mode: `yarn dev`

View the app: <http://localhost:3000>

Login with the different credentials provided below.

## Credentials

To view the application from the admin or employee role you can use these credentials:

Admin account :`admn.ppef@gmail.com` pw: `admin_1234`
Employee account: `employee.ppef@gmail.com` pw: `employee_1234`

You can logout by clicking hovering the profile image in the top right corner and click "logout"

## Assumptions

I had a lot of fun doing this challenge. Here are the assumptions:

- The authentication system is only using Google as a provider therefore the supplied credentials have been provided to experience the app from both the Admin side and Employee side.
- Some seeding is provided to have a quick overview of the app but adding new employees, feedback and preventing duplicates have been implemented.
- Some validation on the Front End and Back End still needs to be implemented
- Unit testing has not been done but can be implemented with tools like Cypress, Jest, etc.
- Feedback are sorted by alphabetical order. When you add a new feedback it will appear at the top but will be sorted alphabetically on the next reload.
- The Employee listing is not highly responsive on mobile. A better implementation could be added.
- Employees are sorted by date of creation.
- Employee emails can't be edited to prevent conflict with the test credentials.
- My Database architecture/querying is not my strongest ability so there could be a lot of improvements done.
- Some Front End modules could be refactored/simplified further (e.g: inputs, select, containers.)








