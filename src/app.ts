import express from "express";
import UrlRouter from "./routes/urlRoutes";

const app = express();
app.use(express.json());

app.use("/", UrlRouter);

export default app;
