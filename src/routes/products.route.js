import express from "express";
import {
    findAll,
    create,
    erease,
    findById,
    update
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/produtos", findAll);
router.get("/produtos/:id", findById);
router.post("/produtos", create);
router.patch("/produtos/:id", update)
router.delete("/produtos/:id", erease);

export default router;
