# sveltekit-blog-1

> SvelteKit Blog 1: High-performance blog with SSR, markdown, SEO, and dark mode

## ✨ Features
- JWT authentication with access + refresh tokens
- Role-based access control (admin/user)
- Full CRUD with pagination, search, and filtering
- Premium responsive UI with dark/light mode
- Real-time validation and error handling
- Docker Compose for one-command startup
- Comprehensive README with API documentation
- Database migrations with Alembic/Flyway

## 🧰 Tech Stack
SvelteKit, TypeScript, PostgreSQL, Prisma, Drizzle ORM

## 🏗️ Architecture
Three-tier architecture: SvelteKit, TypeScript backend, React/TypeScript frontend, PostgreSQL database. Containerized with Docker.

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- SQLite / PostgreSQL

### Setup

```bash
# Clone the repository
git clone https://github.com/elitsuri/sveltekit-blog-1
cd sveltekit-blog-1

# Copy environment variables
cp .env.example .env
```

### Run

```bash
docker compose up --build
```
