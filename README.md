# nodejs-api-boilerplate

Originally I was going to use this project as a backend for a future project but plans have shifted and I no longer need this code. However, I think it might have some value for later on, so I decided to keep this repo alive.

## Nifty features:

- [Express](https://expressjs.com) (REST) server application with decent code structure/separation.
- [Sequelize](https://sequelize.org) ORM with migration scripts to set up your database in a jiffy.
- [Babel](https://babeljs.io) transpiling for ES6 module syntax support.
- [ESLint](https://eslint.org) setup for some basic linting.
- <small>No tests yet 🤫</small>
- Latest version of all the dependencies at the moment of writing.

## Get going:

To run this project as-is after a `git clone`:

1. Make sure PostgreSQL is running and a user `boilerbase` with no password exists and has all privileges on two databases named `boilerbase` and `boilerbase_test`.
2. Install dependencies with `npm install`.
3. Let Sequelize set up your database with `npm run db:up`.
4. Run a development build with `npm run dev` or a production build with `npm run start`.
5. Feed the cat.
