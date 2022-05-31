import express from "express";
import { getFoodPage, createFoodPage, deleteFood } from "../controller/foodPage.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get("/", getFoodPage);
router.post("/", auth, createFoodPage);
router.delete('/deletefood/:id', auth, deleteFood)
export default router;