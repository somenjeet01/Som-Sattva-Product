import { neon } from "@neondatabase/serverless";

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
    throw new Error("Missing DATABASE_URL. Set your Neon connection string in .env or the environment before starting the app.");
}

const sql = neon(DATABASE_URL);

export default sql;
