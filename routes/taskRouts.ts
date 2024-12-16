import { Router } from "express";
import { getAllTasks, getSingleTask } from "../controllers/taskController";


const router = Router();

router.get("/list", getAllTasks)
router.get("/detaile/:id", getSingleTask)

export default router