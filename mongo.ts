import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();
client.connectWithUri(
  "mongodb+srv://deno:denopassword@cluster0-tnmyh.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority",
);

const db = client.database("test");

export default db;
