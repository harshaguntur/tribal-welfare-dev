import express from "express";
import GetShopItems from "../controllers/GetShopItems.js";


const GetShopItemsRouter = express.Router();



GetShopItemsRouter.get("",GetShopItems);



export default GetShopItemsRouter;