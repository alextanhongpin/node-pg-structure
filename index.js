import pkg from "pg-structure";
const { default: pgStructure } = pkg;

// Prefer to use environment variables or ".env" file for the credentials. See the ".env.example" file.
const db = await pgStructure(
  {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
  { includeSchemas: ["public"] }
);

const table = db.get("users");
console.log({ table });

const columnNames = table.columns.map((c) => c.name);
console.log({ columnNames });

const columnTypeName = table.columns.get("id").type.name;
console.log({ columnTypeName });

const indexColumnNames = table.indexes.get("users_pkey").columns;
console.log({ indexColumnNames });

const relatedTables = table.hasManyTables;
console.log({ relatedTables });
