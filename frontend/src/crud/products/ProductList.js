
import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import Topnavbar from "../navbar/Topnavbar"
import Table from 'react-bootstrap/Table';
import { GetProductData, DeleteProductdata ,Singledata} from "../Config/Api"
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import axios from "axios"


const ProductList = () => {

  const [getproduct, setproduct] = useState([])
  const navigate =useNavigate()



   const handleEdit = (categoryId) => {
  console.log("fhdifhi")
    navigate("/UpdateProduct/"+categoryId)

  }




  const handleDelete = (categoryId) => {

    axios.delete(DeleteProductdata + categoryId)
      .then((res) => {
        console.log(res)
    
      })
   


  }


  useEffect(() => {

    axios.get(GetProductData)
      .then((res) => {
        setproduct(res.data.data)
        
      })
      .catch((err) => {
        console.log(err)
      })

      // console.log(getproduct)

  }, [getproduct])





  return (

    <>
      <Topnavbar />
      <div>product List</div>



      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>

          {


       

            getproduct.map((tabledata, index) => {


                return (
                  <>
                    <tr>

                      <td>{++index}</td>
                      <td>{tabledata.name}</td>
                      <td>{tabledata.category}</td>
                      <td>{tabledata.price}</td>
                      <td>{tabledata.quantity}</td>
                      <td><DeleteForeverRoundedIcon onClick={() => handleDelete(tabledata._id)} />  <ModeEditOutlineOutlinedIcon onClick={()=>handleEdit(tabledata._id)} /> </td>
                    </tr>

                  </>
                )
              })


        




          }


        </tbody>
      </Table>
    </>
  )
}

export default ProductList

