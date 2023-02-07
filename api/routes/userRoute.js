import express from "express";
import { updateUser, getUser, getUsers } from "../controllers/user.js";
const router = express.Router();

//CREATE
// router.post("/", verifyAdmin, createUser);
//UPDATE
router.put("/:id", updateUser);
//DELETE
// router.delete("/:id", verifyAdmin, deleteUser);
//GET
router.get("/:id", getUser);
//Get all
router.get("/", getUsers);

export default router;
