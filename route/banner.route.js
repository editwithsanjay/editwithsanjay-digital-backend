import { Router } from "express";
import auth from "../middleware/auth.js";
import { admin } from "../middleware/admin.js";
import { addBannerController, deleteBannerController, getBannersController } from "../controllers/banner.controller.js";

const bannerRouter = Router();

bannerRouter.post("/add", auth, admin, addBannerController);
bannerRouter.get("/get", getBannersController);
bannerRouter.delete("/delete", auth, admin, deleteBannerController);

export default bannerRouter;
