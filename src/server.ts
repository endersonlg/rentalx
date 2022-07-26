import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello world" });
});

app.use(express.json());

app.post("/courses", (request, response) => {
  const { name } = request.body;

  response.json({ name });
});

app.listen(3333, () => console.log("Server is running!"));
