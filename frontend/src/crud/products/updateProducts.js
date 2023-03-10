
import Topnavbar from "../navbar/Topnavbar"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

import { GetProductData,SingleProductdata,UpdateProductdata} from "../Config/Api"


const UpdateProduct = () => {
    const navigate = useNavigate()
    const [value, setvalue] = useState()
    const [name, setname] = useState('');
    const [category, setcategory] = useState('');
    const [price, setprice] = useState(null);
    const [quantity, setquantity] = useState(null);
    const [getSingleProducts,setgetSingleproduct] = useState({})
    const category_id = useParams()
    const [getproduct, setproduct] = useState([])









    const handleinputvalue = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
    }



   
   
    
  useEffect(() => {

    axios.get(GetProductData)
      .then((res) => {
        setproduct(res.data.data)
        
      })
      .catch((err) => {
        console.log(err)
      })

    
   

  }, [getproduct])





    useEffect(() => {
        getsingledata()


    }, [getSingleProducts])

    const getsingledata = () => {

        axios.get(SingleProductdata + `${category_id.id}`)
            .then((res) => {
                setgetSingleproduct(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

           
        setname(getSingleProducts.name)
        setcategory(getSingleProducts.category)
        setprice(getSingleProducts.price)
        setquantity(getSingleProducts.quantity)
      
        // console.log(category)
    
    }





    const update = () => {
        console.log(value)
        axios.put(UpdateProductdata + `${category_id.id}`, value)
            .then((res) => {
                console.log(res)
            })




       
        
        navigate("/ProductList")
    }


    return (
        <>
            <Topnavbar />
            <div>UpdateCategory</div>
            <div className='addcategorycard'>




        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title> Add category </Card.Title>
            <Form action="POST">


              <Form.Group>
                <Form.Label className='mt-2'> Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter category Name" className='mt-0' name='name1' defaultValue={name}  onChange={handleinputvalue} />
              </Form.Group>

              <Form.Label className='mt-2'>Category</Form.Label>
              <Form.Select aria-label="Default select example" name="category1" defaultValue={category} onClick={handleinputvalue}>
                <option  defaultValue={category} >select Category</option>
                {

                  getproduct.map((options) => {
                 
                    return (
                      <>
                        <option defaultValue={category} >{options.category}</option>

                      </>
                    )
                  })




                }

              </Form.Select>


              <Form.Group>
                <Form.Label className='mt-3'>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter category Name" className='mt-0' name='price1' defaultValue={price}  onChange={handleinputvalue} />
              </Form.Group>


              <Form.Group>
                <Form.Label className='mt-3'>Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter category Name" className='mt-0' name='quantity1'  defaultValue={quantity} onChange={handleinputvalue} />
              </Form.Group>



            </Form>

            <Button variant="success" className='mt-3' onClick={update}>Save</Button>

          </Card.Body>
        </Card>
      </div>
        </>
    )
}

export default UpdateProduct