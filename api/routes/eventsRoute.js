import express from "express";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvent,
  getEvents,
  registerEvent,
  getRegistered,
} from "../controllers/Event.js";
import { verifyAdmin, verifyUser } from "../utils/verifyUsers.js";

const router = express.Router();

//CREATE
router.post("/", createEvent);

//UPDATE
router.put("/:id", updateEvent);
//DELETE
router.delete("/:id", deleteEvent);
//GET

router.get("/find/:id", getEvent);
//GET ALL
router.get("/", getEvents);
//Regsitering for an event
router.post("/register", registerEvent);

router.get("/register", getRegistered);

export default router;
