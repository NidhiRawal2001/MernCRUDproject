import express from "express";
import { GetProduct,GetSingleProduct,AddProduct,DeleteProduct,UpadteProduct } from "../Controller/products.controller";
const router = express.Router()

router.get("/getProduct", GetProduct)
router.get("/getsingleProduct/:category_id", GetSingleProduct)
router.post("/addProduct", AddProduct)
router.delete("/deleteProduct/:category_id", DeleteProduct)
router.put("/upadteProduct/:category_id", UpadteProduct)

export default router