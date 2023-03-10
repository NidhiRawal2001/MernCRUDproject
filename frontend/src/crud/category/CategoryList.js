import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import Topnavbar from "../navbar/Topnavbar"
import Table from 'react-bootstrap/Table';
import { Getdata, Deletedata ,Singledata} from "../Config/Api"
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import axios from "axios"
const CategoryList = () => {



  const [getcategory, setcategory] = useState([])
  const navigate =useNavigate()


  const handleEdit = (categoryId) => {
  
    navigate("/Updateedata/"+categoryId)

  }
 




  const handleDelete = (categoryId) => {

    axios.delete(Deletedata + categoryId)
      .then((res) => {
        console.log(res)
    
      })


  }


  useEffect(() => {

    axios.get(Getdata)
      .then((res) => {
        setcategory(res.data.data)
        
      })
      .catch((err) => {
        console.log(err)
      })

  }, [getcategory])


// console.log(getcategory)


  return (

    <>
      <Topnavbar />
      <div>CategoryList</div>



      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>

          {


       

              getcategory.map((tabledata, index) => {


                return (
                  <>
                    <tr>

                      <td>{++index}</td>
                      <td>{tabledata.name}</td>
                      <td>{tabledata.des}</td>
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

export default CategoryList