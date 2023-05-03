import express from "express";
import controller from "../controllers/user";
const router = express.Router();

router.post("/balanced", controller.balanced);
router.post("/fibonocci", controller.fibonocci);

export = router;
