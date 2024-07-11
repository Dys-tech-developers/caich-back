import { Router } from "express";
import createScouting from "../../controllers/scouting/createScouting.js";
import getScouting from "../../controllers/scouting/getScouting.js";
import deleteScouting from "../../controllers/scouting/deleteScouting.js";
import updateScouting from "../../controllers/scouting/updateScouting.js";

const router = Router();

router.post("/create-scouting", createScouting)
router.get("/get-scouting", getScouting)
router.put("/delete-scouting/:id", deleteScouting)
router.put("/update-scouting/:id", updateScouting)

export default router;