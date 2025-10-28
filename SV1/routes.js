import express from 'express';

const router = express.Router();

import { router as routerFrom1_BillItemsTable } from "./1_BillItemsTable/routes.js";
import { router as routerFrom1_BillsTable } from "./1_BillsTable/routes.js";

router.use("/1_BillItemsTable", routerFrom1_BillItemsTable);
router.use("/1_BillsTable", routerFrom1_BillsTable);

export { router };