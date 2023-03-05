import { Router } from "express";
import bookRouter from "./bookRouter.js";
import sellsRouter from "./sellsRouter.js";

const router = Router();

router.use(bookRouter);
router.use(sellsRouter);
export default router;
