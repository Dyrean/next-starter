# Next.js Starter Project 📦

A modern, feature-rich starter template for Next.js projects with TypeScript, Tailwind CSS, NextUI, and more.

![Next.js](https://img.shields.io/badge/Next.js-15.0+-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NextUI](https://img.shields.io/badge/NextUI-2.0+-000000?style=for-the-badge&logo=next.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.0+-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.33.0+-4B32C3?style=for-the-badge)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-4.0+-000000?style=for-the-badge&logo=next.js&logoColor=white)


## ✨ Features

- **Next.js 15+**: Utilizing the latest features of Next.js
- **TypeScript**: For type-safe code and improved developer experience
- **Tailwind CSS**: For rapid and responsive UI development
- **NextUI**: Beautiful and customizable UI components
- **PostgreSQL**: Robust and scalable database solution
- **Drizzle ORM**: Type-safe and performant database toolkit
- **NextAuth.js**: Easy authentication with various providers
- **Dark Mode**: Built-in dark mode support
- **ESLint & Prettier**: Code linting and formatting
- **Docker**: Easy database setup with Docker Compose

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Docker and Docker Compose (for running PostgreSQL)

### ⚡ Quick Start

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/next-starter.git
   cd next-starter
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and fill in the required values.

4. Start the PostgreSQL database:

   ```bash
   docker-compose up -d
   ```

5. Run database migrations:

   ```bash
   pnpm db:migrate
   ```

6. Start the development server:

   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000` to see your application running.

### Environment Variables

This project uses various environment variables for configuration. Make sure to set them up correctly in your `.env` file. You can find the required variables and their descriptions in the `src/env/server.ts` file.

## 📁 Project Structure

```
.
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable React components
│   ├── db/                  # Database related files (schema, migrations)
│   ├── env/                 # Environment configuration
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── public/                  # Static assets
├── .env                     # Environment variables
├── eslintrc.json            # ESLint configuration
├── pritierrc.json           # Prettier configuration
├── docker-compose.yml       # Docker Compose configuration
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🔒 Authentication

This project uses NextAuth.js for authentication with Google OAuth. To configure:

1. Set up a Google OAuth application and obtain the client ID and secret.
2. Add the credentials to your `.env` file:

```bash
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

> [!TIP]
> The main authentication configuration can be found in: `src/auth/config.ts`

> [!IMPORTANT]
> Make sure to set up other required environment variables as specified in `src/env/server.ts`.

## 🎨 Styling

This project uses Tailwind CSS for styling. The main configuration can be found in: `tailwind.config.ts`

NextUI components are also integrated for a cohesive design system.

## 📊 Database

PostgreSQL is used as the database, with Drizzle ORM for type-safe database operations.

To apply schema changes to the database:

To create a new migration after schema changes:

```bash
pnpm db:push
```

To generate a new migration after schema changes:

```bash
pnpm db:generate
```

Database schema and migrations can be found in the `src/db` directory.

To apply migrations:

```bash
pnpm db:migrate
```

## 🎣 Custom Hooks

This project includes custom React hooks for common functionalities. For example, the `useSystemTheme` hook in `src/hooks/use-system-theme.ts` provides an easy way to access and modify the current theme.

## 🧪 Testing

(TODO: Add information about testing setup and running tests)

## 📦 Deployment

This project can be deployed on platforms like Vercel or Netlify. Make sure to set up the required environment variables in your deployment platform.

For the database, consider using a managed PostgreSQL service like Supabase or Amazon RDS.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
