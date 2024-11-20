import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.port || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("velkommen");
  });

  app.listen(port, () => {
    console.log(`
      express køre på port ${port}   
      http://localhost:${port}/
      http://localhost:${port}/data
      `);
  });