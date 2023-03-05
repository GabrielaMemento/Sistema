import { Router } from "express";
import {
  deleteBook,
  getByName,
  insert,
  updateBook,
} from "../controllers/bookController.js";

const bookRouter = Router();

bookRouter.get("/book", getByName);
bookRouter.post("/book", insert);
bookRouter.put("/book", updateBook);
bookRouter.delete("/book/:code", deleteBook);

export default bookRouter;
