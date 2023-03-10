
import Product from '../model/product.model'


  
export const GetProduct = async (req, res) => {


    try {

         const getcategory = await Product.find().populate('category')
        res.status(200).json({
             data:getcategory,
            message: "getProductdata sucessfully"

        })


    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const GetSingleProduct = async (req, res) => {


    try {

        const singleProductid = req.params.category_id
        console.log(singleProductid)
        const SingleProduct= await Product.findOne({ _id:singleProductid }).populate('category')
        if (SingleProduct) {
            res.status(200).json(
                {
                    data:SingleProduct ,
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


export const AddProduct = (req, res) => {


    try {

        const { name1, category1,price1,quantity1 } = req.body
        const createdata = new Product({ name: name1, category:category1, price:price1,quantity:quantity1});
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

export const DeleteProduct = async (req, res) => {


    try {

          const deletecProductid = req.params.category_id
           console.log(deletecProductid)
            const deleteProduct = await Product.deleteOne({_id:deletecProductid})
            if(data.acknowledged){
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

export const UpadteProduct= async (req, res) => {


    try {

        const Productid = req.params.category_id;
        const { name1, category1 ,price1,quantity1} = req.body
        const upadtecategor = await Product.updateOne({ _id: Productid }, { $set: { name: name1, category:category1,price:price1, quantity: quantity1 } })
        console.log(Productid)
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

