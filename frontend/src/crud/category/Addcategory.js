import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import Topnavbar from "../navbar/Topnavbar"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import axios from 'axios'
 import {Postdata} from "../Config/Api"

 var initialValue ={
  name1:'',
  des1:''
 }
const Addcategory = () => {
 const [value,setvalue] =useState(initialValue)
  const navigate =useNavigate()

 const Savedata =(e)=>{
    
  axios.post(Postdata,value ).then((a)=>{console.log(a)})
  setvalue(initialValue)
  navigate("/CategoryList")
   
}

   const handleinputvalue=(e)=>{
    setvalue({...value, [e.target.name]: e.target.value})
   }


  
console.log(value)
  return (
    <>
      <Topnavbar />
      {/* <div>Addcategory</div> */}

      <div className='addcategorycard'>
        <Card style={{ width: '20rem' }}>
          <Card.Body>
          <Card.Title> Add category </Card.Title>
            <Form action="POST">
            <Form.Group>
                <Form.Label className='mt-2'> Name</Form.Label>
                <Form.Control type="email" placeholder="Enter category Name" className='mt-0'name='name1'   onChange={handleinputvalue}   />
                </Form.Group>
                <Form.Group>
                <Form.Label className='mt-3'>Description</Form.Label>
                <Form.Control type="email" placeholder="Enter Description" className='mt-0 p-4' name='des1' onChange={handleinputvalue}  />
                </Form.Group>
            </Form>
            <Button variant="success"  className='mt-3' onClick={Savedata}>Save</Button>
          </Card.Body>
        </Card>

      </div>
    </>
  )
}

export default Addcategory