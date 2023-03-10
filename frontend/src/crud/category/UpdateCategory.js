
import Topnavbar from "../navbar/Topnavbar"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { Singledata, Updatedata } from '../Config/Api'



const UpdateCategory = () => {
  const navigate =useNavigate()
  const [value,setvalue] =useState()
  const [name, setname] = useState('');
  const [des, setdes] = useState('');
  const [getSingleCategory, setgetSingleCategory] = useState({})
  const category_id = useParams()




  const handleinputvalue=(e)=>{
    setvalue({...value, [e.target.name]: e.target.value})
   }

 
  // update()
  // console.log(value)







 
  useEffect(() => {
    getsingledata()
   

  }, [getSingleCategory])

   const getsingledata=()=>{

    axios.get(Singledata + `${category_id.id}`)
    .then((res) => {
      setgetSingleCategory(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
   
    setname(getSingleCategory.name)
    setdes(getSingleCategory.des)
   
   }



  
  //  console.log(getSingleCategory)
 


  const update = () => {
     console.log(value)
    axios.put(Updatedata + `${category_id.id}`,value)
    .then((res)=>{
      console.log(res)
    })

   
   
    console.log(getSingleCategory)
     console.log(name)
       console.log(des)
    navigate("/CategoryList")
  }

   
  return (
    <>
      <Topnavbar />
      <div>UpdateCategory</div>
      <div className='addcategorycard'>
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title> Edit category </Card.Title>
            <Form action="POST">
              <Form.Group>
                <Form.Label className='mt-2'> Name</Form.Label>
                <Form.Control type="email" placeholder="Enter category Name" className='mt-0' name='nameUpdated' defaultValue={name} onChange={ 
        handleinputvalue
                } />
              </Form.Group>
              <Form.Group>
                <Form.Label className='mt-3'>Description</Form.Label>
                <Form.Control type="email" placeholder="Enter Description" className='mt-0 p-4' name='desUpdated' defaultValue={des} onChange={handleinputvalue} />
              </Form.Group>
            </Form>
            <Button variant="success" className='mt-3' onClick={() => update()} >Update</Button>
          </Card.Body>
        </Card>

      </div>
    </>
  )
}

export default UpdateCategory