import ChessRoutes from "./Chess/routes.js";
import express from 'express';
import cors from "cors";
import session from "express-session";
import 'dotenv/config';

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({
  // credentials: true,
  origin: process.env.NETLIFY_URL || "http://localhost:5173",
}));

app.use(express.json());

ChessRoutes(app);

app.get('/', (req, res) => {
  res.send("Hello World! Welcome to Luc Ferrara's API")
});

app.listen(port);

