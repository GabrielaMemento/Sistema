import { Router } from "express";
import {
  insert,
  deleteSell,
  getSell,
  updateSell,
} from "../controllers/sellsController.js";

const sellsRouter = Router();

sellsRouter.post("/sell", insert);

sellsRouter.get("/sell", getSell);
sellsRouter.put("/sell", updateSell);
sellsRouter.delete("/sell/:code", deleteSell);

export default sellsRouter;
