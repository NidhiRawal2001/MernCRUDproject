import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Topnavbar from "../navbar/Topnavbar"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { Getdata, postProductData } from '../Config/Api'

var initialValue = {
  name1: '',
  category1: '',
  price1: '',
  quantity1: ''

}
const AddProduct = () => {
  const navigate = useNavigate()

  const [categoryoptions, setcategoryoptions] = useState([])
  const [value, setvalue] = useState(initialValue)



  const handleinputvalue = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value })
  }

  console.log(value)
  const SaveProductdata = (e) => {

    axios.post(postProductData, value).then((a) => { console.log(a) })
    // setvalue(" ")
    navigate("/ProductList")
  }

  useEffect(() => {
    getcategorydata()
  }, [])

  const getcategorydata = () => {
    axios.get(Getdata)
      .then((res) => {
        console.log(res)
        setcategoryoptions(res.data.data)
      })




  }

  // console.log(categoryoptions)


  return (
    <>
      <Topnavbar />
      <div>AddProductswrdedrf</div>

      <div className='addcategorycard'>
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title> Add category </Card.Title>
            <Form action="POST">


              <Form.Group>
                <Form.Label className='mt-2'> Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter category Name" className='mt-0' name='name1' onChange={handleinputvalue} />
              </Form.Group>

              <Form.Label className='mt-2'>Category</Form.Label>
              <Form.Select aria-label="Default select example" name="category1" onClick={handleinputvalue}>
                <option defaultValue=''>select Category</option>
                {

                  categoryoptions.map((options) => {
                    //  console.log(options)
                    return (
                      <>
                        <option value={options.name} >{options.name}</option>

                      </>
                    )
                  })




                }

              </Form.Select>


              <Form.Group>
                <Form.Label className='mt-3'>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter category Name" className='mt-0' name='price1' onChange={handleinputvalue} />
              </Form.Group>


              <Form.Group>
                <Form.Label className='mt-3'>Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter category Name" className='mt-0' name='quantity1' onChange={handleinputvalue} />
              </Form.Group>



            </Form>

            <Button variant="success" className='mt-3' onClick={SaveProductdata}>Save</Button>

          </Card.Body>
        </Card>
      </div>
    </>

  )
}

export default AddProduct