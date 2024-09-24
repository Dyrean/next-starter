import { migrate } from "drizzle-orm/postgres-js/migrator";

import config from "@/../drizzle.config";
import { env } from "@/env/server";

import db, { client } from "./index";

if (!env.DB_MIGRATION) {
	throw new Error("Must set DB_MIGRATIONS to true to run migrations");
}

await migrate(db, { migrationsFolder: config.out! });
await client.end();
