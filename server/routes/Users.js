import express from "express";
import {
    deleteUser,
    getUser,
    getUsers,
    updateUser,
} from "../controllers/User.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:username", getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
