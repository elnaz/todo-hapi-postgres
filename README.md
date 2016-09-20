# todo-hapi-postgres

An [example implementation](http://todo-backend-express.herokuapp.com/) of the [Todo-Backend API](https://github.com/TodoBackend/todo-backend-js-spec) spec in [Node](https://nodejs.org/en/) using the [Hapi](http://hapijs.com/) framework and a [Bookshelf](http://bookshelfjs.org/) ORM connected to a [Postgres](https://www.postgresql.org/) database.

To run the API locally, clone the repo and run:

```bash
$ npm install
$ npm run db:setup:user
$ npm run db:setup
$ npm run db:migrate
$ npm start
```
