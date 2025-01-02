# Product Catalog Service

![Product Catalog Service](https://img.shields.io/badge/NestJS-Official-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 📦 Overview

The **Product Catalog Service** is a core component of the Unified E-Commerce Platform, built using **NestJS** and **MongoDB**. It manages all product-related data, including creation, retrieval, updating, and deletion of products and categories. This service provides robust APIs for the frontend and other microservices to interact with the product catalog efficiently and in real-time.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, and Delete products and categories.
- **Advanced Search**: Full-text search with filtering and sorting using Elasticsearch.
- **Real-Time Inventory Updates**: Push real-time stock level changes to clients via WebSockets.
- **Image Management**: Upload and manage product images with cloud storage integration.
- **Role-Based Access Control**: Secure endpoints with JWT authentication and role-based permissions.
- **API Documentation**: Interactive Swagger documentation for easy API exploration.

## 🛠️ Technologies

- **Framework**: NestJS (TypeScript)
- **Database**: MongoDB (via Mongoose)
- **Search Engine**: Elasticsearch
- **Real-Time Communication**: Socket.IO
- **Cloud Storage**: AWS S3 or Azure Blob Storage
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger (`@nestjs/swagger`)
- **Containerization**: Docker
- **Orchestration**: Kubernetes (Optional)

## 📋 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** instance
- **Elasticsearch** instance
- **AWS S3** or **Azure Blob Storage** credentials (for image storage)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/product-catalog-service.git
   cd product-catalog-service
   ```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

--- 

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

---

## MongoDB Query Operators

MongoDB provides a set of **query operators** to filter documents in collections based on specific conditions. These operators allow you to perform comparisons, logical operations, and more.


### Comparison Operators

Comparison operators are used to compare values in documents.

| Operator | Description                          | Example Usage                                                                 |
|----------|--------------------------------------|-------------------------------------------------------------------------------|
| `$eq`    | Matches values that are equal to.   | `{ "field": { "$eq": value } }`                                              |
| `$ne`    | Matches values that are not equal.  | `{ "field": { "$ne": value } }`                                              |
| `$gt`    | Matches values greater than.        | `{ "field": { "$gt": value } }`                                              |
| `$gte`   | Matches values greater or equal.    | `{ "field": { "$gte": value } }`                                             |
| `$lt`    | Matches values less than.           | `{ "field": { "$lt": value } }`                                              |
| `$lte`   | Matches values less or equal.       | `{ "field": { "$lte": value } }`                                             |
| `$in`    | Matches any value in an array.      | `{ "field": { "$in": [value1, value2] } }`                                   |
| `$nin`   | Matches values not in an array.     | `{ "field": { "$nin": [value1, value2] } }`                                  |


### Logical Operators

Logical operators combine multiple query conditions.

| Operator | Description                             | Example Usage                                                                 |
|----------|-----------------------------------------|-------------------------------------------------------------------------------|
| `$and`   | Joins query clauses with AND logic.     | `{ "$and": [ { "field1": condition }, { "field2": condition } ] }`           |
| `$or`    | Joins query clauses with OR logic.      | `{ "$or": [ { "field1": condition }, { "field2": condition } ] }`            |
| `$not`   | Inverts the effect of a query.          | `{ "field": { "$not": { "$gt": value } } }`                                  |
| `$nor`   | Joins query clauses with NOR logic.     | `{ "$nor": [ { "field1": condition }, { "field2": condition } ] }`           |


### Element Operators

Element operators are used to query based on the presence or type of a field.

| Operator | Description                                | Example Usage                                                                 |
|----------|--------------------------------------------|-------------------------------------------------------------------------------|
| `$exists`| Matches documents with a specific field.   | `{ "field": { "$exists": true } }`                                           |
| `$type`  | Matches fields of a specific BSON type.    | `{ "field": { "$type": "string" } }`                                         |

---

### Array Operators

Array operators are used to query array fields.

| Operator     | Description                                | Example Usage                                                                 |
|--------------|--------------------------------------------|-------------------------------------------------------------------------------|
| `$all`       | Matches arrays with all values specified. | `{ "field": { "$all": [value1, value2] } }`                                  |
| `$elemMatch` | Matches documents with at least one array element that satisfies a condition. | `{ "field": { "$elemMatch": { "$gt": 5, "$lt": 10 } } }` |
| `$size`      | Matches arrays of a specific size.         | `{ "field": { "$size": 3 } }`                                                |

---

### Evaluation Operators

Evaluation operators are used for advanced queries, such as regex or JavaScript.

| Operator   | Description                             | Example Usage                                                                 |
|------------|-----------------------------------------|-------------------------------------------------------------------------------|
| `$regex`   | Matches fields with regular expressions.| `{ "field": { "$regex": "^value" } }`                                        |
| `$expr`    | Allows conditional logic in queries.    | `{ "$expr": { "$gt": [ "$field1", "$field2" ] } }`                          |

---

---
# E-Commerce Shop Infrastructure

This document outlines the infrastructure for building a scalable e-commerce shop using **NestJS** (backend) and **ReactJS** (frontend). It starts with a small shop and is designed to scale seamlessly for larger operations.

---

## Overview

- **Frontend**: ReactJS (TypeScript preferred for scalability)
- **Backend**: NestJS (modular, scalable framework)
- **Database**: PostgreSQL initially, scalable to distributed databases
- **Authentication**: JWT and OAuth
- **Hosting**: Cloud services (AWS, GCP, Azure)

---

## Technologies

### Frontend
- **Framework**: ReactJS
- **State Management**: Redux Toolkit or React Query
- **UI Library**: Material-UI or TailwindCSS
- **Routing**: React Router
- **Testing**: Jest + React Testing Library

### Backend
- **Framework**: NestJS
- **ORM**: TypeORM or Prisma
- **Authentication**: Passport.js (JWT, OAuth strategies)
- **Task Scheduling**: Bull (Redis-backed queues)
- **File Uploads**: Multer or cloud storage (AWS S3)
- **Caching**: Redis

### Database
- **Primary DB**: PostgreSQL
- **Search**: ElasticSearch (for catalog search)
- **NoSQL (Optional)**: MongoDB (analytics, logs)

### DevOps & Hosting
- **CI/CD**: GitHub Actions, GitLab CI, or Jenkins
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Monitoring**: Prometheus + Grafana
- **Error Tracking**: Sentry

---

## Architecture

### Frontend
- **Service Layer**: Axios or Fetch API for HTTP requests
- **Component Library**: Reusable components for scalability
- **SEO**: Consider Next.js for server-side rendering (SSR)

### Backend
- **Modular Structure**:
  - Modules: `Users`, `Orders`, `Products`, `Payments`
  - Services: Business logic
  - Controllers: Handle HTTP requests
  - Entities: Define database models
- **API**: REST and/or GraphQL (using Apollo Server)

### Database Design
- **Core Tables**:
  - `Users`: Stores user information
  - `Products`: Manages inventory and pricing
  - `Orders`: Tracks order details
  - `Payments`: Logs transactions
  - `Categories`: Product categorization
  - `Reviews`: User feedback
- **Scaling**: Sharding and read replicas for PostgreSQL

---

## Features

### Authentication
- **JWT**: Stateless authentication
- **OAuth2**: Support for Google, Facebook logins
- **Multi-Tenancy**: Separate stores for different sellers

### Payments
- Integrate with **Stripe**, **PayPal**, or **Adyen**
- Store transaction logs in a NoSQL database for analytics

### Search & Recommendations
- **ElasticSearch**: Full-text search and filtering
- **Recommendation Engine**: ML-powered recommendations

### Scalability & Performance
- **Load Balancer**: Nginx or AWS Elastic Load Balancer
- **CDN**: Cloudflare or AWS CloudFront for caching
- **Queue Management**: Bull or RabbitMQ for async tasks

---

## Deployment

### Small-Scale Deployment
- **Frontend**: Deploy via **Vercel**
- **Backend**: Host on **Heroku**
- **Database**: Use **AWS RDS** or similar managed services

### Scaling Up
- **Backend**: Migrate to Kubernetes on AWS/GCP/Azure
- **Database**: Add read replicas and migrate to distributed DBs like CockroachDB
- **Frontend**: Optimize with Webpack and code splitting

---

## Monitoring & Maintenance
- **Logs**: Elastic Stack (ELK)
- **Metrics**: Prometheus + Grafana
- **Error Tracking**: Sentry
- **Incident Management**: PagerDuty or OpsGenie

---

## Future Considerations
- **Multilingual Support**: Use `i18next` for translations
- **Mobile App**: Build with React Native
- **Microservices**: Split into independent services (users, payments, orders)
- **Real-Time Features**: Add WebSocket or push notification support

---

