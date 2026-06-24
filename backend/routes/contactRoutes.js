import express from "express";
import Contact from "../models/Contact.js";
import { sendContactEmail } from "../sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("Received Data:", req.body);

  try {
    const newContact = new Contact(req.body);

    const savedContact = await newContact.save();

    await sendContactEmail(req.body);

    console.log("Saved:", savedContact);

    res.status(201).json(savedContact);

  } catch (error) {

    console.log("FULL ERROR:");
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json(contacts);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


export default router;