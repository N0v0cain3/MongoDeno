import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();

import { getNotes, createNote } from "./routes.ts";

const app = new Application();

router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    message: "eZ first / route",
  };
});

router.get("/notes", getNotes);

// router.get("/notes/:id", getSingleNote);

router.post("/notes", createNote);

// router.put("/notes/:id", updateNote);

// router.delete("/notes/:id", deleteNote);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
console.log("server is running at port 8000");
