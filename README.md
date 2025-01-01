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
```

---

# MongoDB Fundamentals

MongoDB is a NoSQL database designed for scalability, flexibility, and simplicity. Unlike relational databases like PostgreSQL, MongoDB stores data in a schema-less, JSON-like format called **documents**. This guide explains the key concepts and how they compare to EF with PostgreSQL.

---

## Table of Contents
1. [What is a Document?](#what-is-a-document)
2. [Collections](#collections)
3. [Embedded Documents vs References](#embedded-documents-vs-references)
4. [Schema Design Principles](#schema-design-principles)
5. [Relationships in MongoDB](#relationships-in-mongodb)
6. [Transactions in MongoDB](#transactions-in-mongodb)
7. [Indexes](#indexes)
8. [Comparison: MongoDB vs EF with PostgreSQL](#comparison-mongodb-vs-ef-with-postgresql)

## What is a Document?

- A **document** is the fundamental unit of data in MongoDB.
- Documents are stored in **collections** (similar to tables in relational databases).
- MongoDB documents are JSON-like objects that support a flexible and dynamic schema.

**Example Document:**
```json
{
  "_id": "64c3d1a72f1e4a1b3d8e5678",
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Sample City",
    "postalCode": "12345"
  }
}
```

## Collections

- A collection is a group of documents, similar to a table in relational databases.
- Collections do not enforce a schema, meaning documents in the same collection can have different structures.

**Example Collection:**
```json
[
  { "_id": "1", "name": "Alice", "age": 25 },
  { "_id": "2", "name": "Bob", "city": "Sample City" }
]
```

## Embedded Documents vs References
### 1. Embedded Documents
- Store related data inside the document.
- Suitable for one-to-few relationships or tightly coupled data.
- Benefits:
  - Single document query for related data.
  - Atomic operations on the document.
  - Simpler schema and faster reads.

**Example:**
```json
{
  "_id": "1",
  "name": "John Doe",
  "address": {
    "street": "123 Main St",
    "city": "Sample City",
    "postalCode": "12345"
  }
}
```

### 2. References (Normalized Data)
- Store related data in separate documents and reference them using _id.
- Suitable for one-to-many or many-to-many relationships, or when related data is large or frequently queried independently.
- Benefits:
  - Data normalization (avoids duplication).
  - Flexibility for shared or independent updates.

**Example: Parent Document:**
```json
{
  "_id": "1",
  "name": "John Doe",
  "addresses": ["101", "102"]
}
```
**Referenced Child Documents:**
```json
{
  "_id": "101",
  "street": "123 Main St",
  "city": "Sample City",
  "postalCode": "12345"
}
{
  "_id": "102",
  "street": "456 Work St",
  "city": "Worktown",
  "postalCode": "67890"
}
```

## Schema Design Principles
### 1. Embed When:

- Data is tightly coupled (e.g., user profile and preferences).
- The data is often queried together.
- Data volume is small.

### 2. Reference When:

- Data is shared between entities.
- Data grows large (e.g., a list of user orders).
- Relationships are complex.

### 3. Denormalization:
- MongoDB often prefers denormalization (duplicating data) for performance, especially in read-heavy applications.

### 4. Schema Flexibility:
- MongoDB allows fields to be added or removed without altering the entire collection.


## Relationships in MongoDB
### 1. One-to-One
- Use embedding or referencing.
**Example:**
```json
{
  "_id": "1",
  "name": "John",
  "profile": { "bio": "Software Developer", "twitter": "@johndoe" }
}
```

### 2. One-to-Many
- Use embedding for small related data.
- Use referencing for larger datasets.

### 3. Many-to-Many
- Always use referencing.
- **Example:**
```json
{
  "_id": "1",
  "name": "John",
  "groups": ["101", "102"]
}
```

## Transactions in MongoDB
- MongoDB supports multi-document transactions in replica sets and sharded clusters.
- Transactions ensure atomicity for operations across multiple documents or collections.
- Similar to EF transactions.
- **Example:**
```js
const session = await connection.startSession();
session.startTransaction();

try {
  await collectionA.insertOne({ name: 'John' }, { session });
  await collectionB.insertOne({ role: 'Admin' }, { session });
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
```

## Indexes
- MongoDB supports indexes for optimizing queries.
- Common Index Types:
  - Single Field Index: Improves queries on a single field.
  - Compound Index: Improves queries on multiple fields.
  - Text Index: For full-text search.
- **Example:**
```js
db.collection.createIndex({ name: 1 }); // Ascending index on "name"
db.collection.createIndex({ age: -1 }); // Descending index on "age"
```

## Comparison: MongoDB vs EF with PostgreSQL

| **Feature**              | **MongoDB**                                              | **EF with PostgreSQL**                                   |
|--------------------------|---------------------------------------------------------|---------------------------------------------------------|
| **Data Model**           | Document-based (JSON-like, flexible schema).            | Relational (tables, rows, strict schema).               |
| **Schema Changes**       | Dynamic; fields can be added/removed anytime.           | Requires migrations for schema changes.                 |
| **Relationships**        | Embedded documents or references (manual).             | Relationships handled via foreign keys and navigation properties.  |
| **Query Language**       | JSON-like queries using MongoDB's query API.            | SQL-based queries, LINQ, and strongly typed methods.    |
| **Transactions**         | Supported (requires replica set or sharded cluster).    | Fully supported with built-in atomicity.                |
| **Joins**                | Not natively supported; requires aggregation framework. | Fully supported with efficient joins via SQL.           |
| **Performance**          | Optimized for fast, flexible queries with denormalized data. | Optimized for normalized data and complex joins.         |
| **Indexes**              | Supports single-field, compound, and text indexes.      | Supports primary, unique, and composite indexes.        |
| **Scaling**              | Horizontal scaling (sharding).                         | Vertical scaling (add resources to the server).         |
| **ACID Compliance**      | Transactions provide ACID compliance across multiple documents (replica sets only). | Fully ACID compliant out-of-the-box.                    |
| **Data Relationships**   | Flexible, managed manually via references or embedding. | Managed via foreign keys and relationships.             |
| **Primary Use Cases**    | Flexible data models, hierarchical data, and high scalability. | Structured, normalized data with strict relationships.  |
| **Ease of Use**          | Schema flexibility simplifies development.              | Strongly typed schemas with migrations simplify updates.|

