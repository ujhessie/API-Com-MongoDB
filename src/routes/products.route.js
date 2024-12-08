import express from "express";
import {
    findAll,
    create,
    erease,
    findById,
    update
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", findAll);
router.get("/:id", findById);
router.post("/", create);
router.patch("/:id", update)
router.delete("/:id", erease);

export default router;
