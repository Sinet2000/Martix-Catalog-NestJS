<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Recommended Packages for a Production-Grade NestJS Application

Below is a curated list of **must-have** packages (grouped by functionality) for an enterprise-level NestJS project. This includes database connectors (both MongoDB and PostgreSQL), validation, security, authentication, reactive programming, messaging, emailing, job scheduling, logging, and more.

---

## 1. **Core NestJS**

- **`@nestjs/common`**  
  Core NestJS decorators, interfaces, pipes, etc.

- **`@nestjs/core`**  
  Core NestJS platform-agnostic APIs.

- **`@nestjs/platform-express`**  
  Integration with Express HTTP server (standard for NestJS).

- **`@nestjs/cli`** (dev dependency)  
  Helps create, run, and manage your NestJS application.

---

## 2. **Database**

> Depending on your choice of SQL (PostgreSQL) or NoSQL (MongoDB), pick the appropriate connector(s).

### 2.1. **PostgreSQL (SQL)**

- **`@nestjs/typeorm`**  
  Official NestJS module for TypeORM integration.

- **`typeorm`**  
  TypeORM library itself.

- **`pg`**  
  The PostgreSQL driver used by TypeORM to connect to Postgres.

### 2.2. **MongoDB (NoSQL)**

- **`@nestjs/mongoose`**  
  Official NestJS Mongoose integration.

- **`mongoose`**  
  Mongoose ODM library for MongoDB.

---

## 3. **Validation**

- **`class-validator`**  
  Declarative validation decorators (e.g. `@IsString()`, `@IsEmail()`).

- **`class-transformer`**  
  Transforms plain JavaScript objects into class instances and vice versa, used in tandem with `class-validator`.

---

## 4. **Security & Auth**

- **`@nestjs/passport`**  
  Passport integration for NestJS.

- **`passport`**  
  Underlying Passport authentication framework.

- **`passport-jwt`**  
  JSON Web Token strategy for Passport.

- **`bcrypt`** or **`argon2`**  
  Secure password hashing.

- **`helmet`**  
  Basic security headers middleware.

- **`cors`**  
  Enable Cross-Origin Resource Sharing.

---

## 5. **Reactive / Microservices**

- **`rxjs`**  
  The Reactive Extensions for JavaScript library, bundled with Nest but worth mentioning.

- **`@nestjs/microservices`**  
  Built-in NestJS package for creating microservices and event-based apps.  
  *(Optional, if you plan to build a microservice architecture.)*

---

## 6. **Messaging & Queues**

- **`amqplib`**  
  For RabbitMQ integration (AMQP).

- **`bull`** or **`bullmq`**  
  For Redis-based queues (background jobs, delayed tasks).

---

## 7. **Emailing**

- **`nodemailer`**  
  Node.js library for sending emails (SMTP, etc.).

- **`@nestjs-modules/mailer`** (optional)  
  A NestJS wrapper around Nodemailer for easier mailer integration.

---

## 8. **Job Scheduling & Tasks**

- **`@nestjs/schedule`**  
  Cron jobs and scheduling built into NestJS.

- **`bull` or `bullmq`** (again)  
  Can also handle recurring jobs, concurrency, and delayed tasks.

---

## 9. **Logging**

- **`winston`**  
  A popular logging framework, highly configurable.

- **`@nestjs/winston`**  
  Integration with NestJS’s Logger service.

*(Alternatively, you could use **`pino`** + **`@nestjs/pino`**. Both Winston and Pino are great choices.)*

---

## 10. **API Documentation**

- **`@nestjs/swagger`**  
  Automatic Swagger/OpenAPI documentation generation.

*(Requires `swagger-ui-express` under the hood, but that’s handled automatically by NestJS.)*

---

## 11. **Configuration & Environment**

- **`@nestjs/config`**  
  Manages environment variables and configuration in NestJS.

- **`joi`**  
  For schema-based validation of environment variables (e.g., used with `@nestjs/config`).

---

## 12. **Miscellaneous / Utilities**

- **`lodash`** or **`ramda`**  
  Utility functions for object/array manipulations.

- **`axios`**  
  HTTP client for making external requests, if needed.

- **`uuid`**  
  Generating universally unique identifiers (UUIDs).

- **`@nestjs/terminus`** (optional)  
  Built-in health checks and readiness probes for DevOps.

- **`@nestjs/cache-manager`** or **`cache-manager`** (optional)  
  For caching support via Redis or other backends.

---

## Example `package.json` (excerpt)

```jsonc
{
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/platform-express": "^10.0.0",
    "@nestjs/typeorm": "^10.0.0",      // If using TypeORM
    "typeorm": "^0.3.0",               // If using TypeORM
    "pg": "^8.7.1",                    // PostgreSQL driver
    "@nestjs/mongoose": "^10.0.0",     // If using MongoDB
    "mongoose": "^7.0.0",             // If using MongoDB
    "class-validator": "^0.13.2",
    "class-transformer": "^0.5.1",
    "@nestjs/passport": "^10.0.0",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.0",
    "bcrypt": "^5.1.0",               // or "argon2": "^0.27.2"
    "helmet": "^7.0.0",
    "cors": "^2.8.5",
    "@nestjs/microservices": "^10.0.0",
    "amqplib": "^0.10.3",
    "bull": "^4.0.2",                  // or "bullmq": "^3.0.0"
    "nodemailer": "^6.7.2",
    "@nestjs/schedule": "^3.0.0",
    "winston": "^3.9.0",
    "@nestjs/winston": "^10.0.0",
    "@nestjs/swagger": "^6.0.0",
    "@nestjs/config": "^3.0.0",
    "joi": "^17.6.0",
    "lodash": "^4.17.21",
    "axios": "^1.1.3",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.0.0",
    "@types/bcrypt": "^5.0.0",
    "@types/lodash": "^4.14.191",
    "@types/node": "^20.0.0",
    "@types/jest": "^29.5.0",
    "@types/uuid": "^9.0.0",
    "typescript": "^5.0.4",
    "ts-node": "^10.9.1",
    "jest": "^29.5.0",
    "supertest": "^6.3.3"
  }
}
