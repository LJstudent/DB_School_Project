import { Router } from "express";
import { getDataRecords, putApproved } from "../controllers/datarecord.controller";

const router = Router();

// register routes
router.get('', getDataRecords)
router.put('/approved/:id', putApproved)

export default router