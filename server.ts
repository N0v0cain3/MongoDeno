import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();

const app = new Application();

router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    message: "eZ first / route",
  };
});

router.get("/notes", getNotes);

router.get("/notes/:id", getSingleNote);

router.post("/notes", createNote);

router.put("/notes/:id", updateNote);

router.delete("/notes/:id", deleteNote);
