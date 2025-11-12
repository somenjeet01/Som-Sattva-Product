import express from "express";
import {
  addContact,
  getAllContacts,
  updateContact,
} from "../controllers/contactController.js";

const contactRouter = express.Router();

// Route to add a new contact
contactRouter.post("/add", addContact);

// Route to get all contacts
contactRouter.get("/all", getAllContacts);

// Route to update a contact
contactRouter.put("/update", updateContact);

export default contactRouter;
