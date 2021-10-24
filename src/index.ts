import express from "express";

const app = express();

app.use(express.json());

app.listen(3333, async () => {
  console.log("🚀 Server started on port 3333!");
});

function test(a: number, b: number) {
  return a + b;
}
