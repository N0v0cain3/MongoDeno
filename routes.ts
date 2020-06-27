import { RouterContext, Router } from "https://deno.land/x/oak/mod.ts";
import db from "./mongo.ts";

const notesCollection = db.collection("notes");

const getNotes = async (ctx: RouterContext) => {
  const notes = await notesCollection.find();
  ctx.response.body = notes;
};

const getSingleNote = async (ctx: RouterContext) => {
  const id = ctx.params.id;
  const note = await notesCollection.findOne({ _id: { $oid: id } });
  ctx.response.status = 200;
  ctx.response.body = note;
};

const createNote = async (ctx: RouterContext) => {
  const body = await ctx.request.body();
  const note = body.value;
  const id = await notesCollection.insertOne({ note });

  ctx.response.status = 201;
  ctx.response.body = {
    success: true,
    note: note,
  };
};

export { getNotes, createNote, getSingleNote };
