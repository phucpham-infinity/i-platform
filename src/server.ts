import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "@/helpers";
import { mongooseConnect } from "@/config";

import { RootRender } from "@/router/public";
import { UserRouter } from "@/router/api";

if (!env("PORT")) {
  process.exit(1);
}

const PORT: number = +env("PORT");
const DB_URL = env("DB_URL");

export const app = express();
app.use(morgan("combined"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
  })
);
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/api", [UserRouter]);

app.get("*", RootRender);

app
  .listen(PORT, () => {
    console.log(`Server started on port ${PORT}: http://localhost:${PORT}`);
    mongooseConnect({ db: DB_URL });
  })
  .on("error", (err) => {
    console.log("ERROR: ", err);
  });
