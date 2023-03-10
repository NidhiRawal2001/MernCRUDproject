import express from "express";
import Category from "../model/category.model"

const app = express();


export const GetCategory = async (req, res) => {


    try {

         const getcategory = await Category.find()
        res.status(200).json({
             data:getcategory,
            message: "getdata sucessfully"

        })


    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const GetSingleCategory = async (req, res) => {


    try {

        const singlecategoryid = req.params.category_id
        console.log(singlecategoryid)
        const SingleCategory = await Category.findOne({ _id:singlecategoryid })
        if (SingleCategory) {
            res.status(200).json(
                {
                    data:SingleCategory ,
                    message: 'Single Category data!'
                }
            )
        }


    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}


export const AddCategory = (req, res) => {


    try {

        const { name1, des1 } = req.body
        const createdata = new Category({ name: name1, des: des1 });
        const saveDATA = createdata.save()
        if (saveDATA) {
            res.status(200).json({
                data: createdata,
                message: "created data"

            })

        }


    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const DeleteCategory = async (req, res) => {


    try {

          const deletecategoryid = req.params.category_id
           console.log(deletecategoryid)
            const deletecategory = await Category.deleteOne({_id:deletecategoryid})
            if(deletecategory.acknowledged){
                res.status(200).json({
                    message:'Deleted Successfully'
                })
            }
        

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const UpadteCategory = async (req, res) => {


    try {

        const categoeyid = req.params.category_id;
        const { nameUpdated, desUpdated } = req.body
        const upadtecategor = await Category.updateOne({ _id: categoeyid }, { $set: { name: nameUpdated, des: desUpdated } })
        console.log(categoeyid)
        if (upadtecategor.acknowledged) {
            res.status(200).json({
                message: 'Update Successfully'
            })
        }


    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}