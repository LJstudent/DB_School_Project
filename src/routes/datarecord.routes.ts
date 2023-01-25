import { Router } from "express";
import { getDataRecords, putApprovedByDirector, putApprovedByHeadOfPurchasingDepartment } from "../controllers/datarecord.controller";

const router = Router();

// register routes
router.get('', getDataRecords)
router.put('/approved-director/:id', putApprovedByDirector)
router.put('/approved-headofpurchasingdepartment/:id', putApprovedByHeadOfPurchasingDepartment)

export default router