import { Router } from "express"
import dataRecordRoutes from "./datarecord.routes"

const router = Router()

router.use('/datarecord', dataRecordRoutes)

export default router