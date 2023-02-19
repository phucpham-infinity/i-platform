import express from "express";
import { register } from "./controllers/register";
import { validate } from "@/middleware";
import { z } from "zod";

export const UserRouter = express.Router();

const registerValidate = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(5),
  }),
});

UserRouter.use(validate(registerValidate))
  .route("/user/register")
  .post(register);
