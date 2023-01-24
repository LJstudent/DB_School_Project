import { Router } from "express";
import { getDataRecords } from "../controllers/datarecord.controller";

const router = Router();

// register routes
router.get('', getDataRecords)

export default router