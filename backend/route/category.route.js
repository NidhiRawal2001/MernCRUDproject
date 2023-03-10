import express from "express";
import { GetCategory,GetSingleCategory,AddCategory,DeleteCategory,UpadteCategory } from "../Controller/category.controller";
const router = express.Router()

router.get("/getcategory", GetCategory)
router.get("/getsinglecategory/:category_id", GetSingleCategory)
router.post("/addcategory", AddCategory)
router.delete("/deletecategory/:category_id", DeleteCategory) 
router.put("/upadtecategory/:category_id", UpadteCategory)

export default router