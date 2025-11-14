import express from "express";
import { subscribeNewsletter } from "../controllers/newsletterController.js";

const newsletterRouter = express.Router();

// Route to subscribe to the newsletter
newsletterRouter.post("/subscribe", subscribeNewsletter);

export default newsletterRouter;
