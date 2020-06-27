import { RouterContext, Router } from "https://deno.land/x/oak/mod.ts";
import db from "./mongo.ts";

const notesCollection = db.collection("notes");

const getNotes = async (ctx: RouterContext) => {
  const notes = await notesCollection.find();
  ctx.response.body = "Get notes";
};

export { getNotes };
