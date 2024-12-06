import express from "express";
import {createCase,updateCase,getCaseDetails,deleteCase} from "../../controllers/caseController.js";
const router = express.Router();

router.post("/create", createCase);
router.put("/:id", updateCase);
router.delete("/:id", deleteCase);
router.get("/:id", getCaseDetails);

// module.exports = router;
export default router;
