import express from "express";
import { register } from "controllers/authantication";

export default (router: express.Router) => {
  router.post("/auth/register", register);
};
