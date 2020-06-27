import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();
client.connectWithUri(
  "INSERT MONGO URI HERE",
);

const db = client.database("test");

export default db;
