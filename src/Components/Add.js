import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Employee from './Employee';
import uuid from 'react-uuid';

function Add() {

 
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desg,setDesg]=useState('')
  const [salary,setSalary]=useState(0)

  let history=useNavigate()

  const handleAdd=(e)=>{
    e.preventDefault()

    let ids=uuid();
    console.log(ids)

    let uniqueId=ids.slice(0,8);
    console.log(uniqueId);
    Employee.push({
      id:uniqueId,
      uname:uname,
      age:age,
      desg:desg,
      salary:salary
    })
    history('/')
  }

  return (
    <div><h1 className='mt-4 text-center'>Add Employee</h1>
        
    <p className='text-warning mt-4 text-center'>At the heart of every corporate success lies the primary role of strong management. <br></br>
    Employers must display strong leadership and mentorship qualities to bring the best out of the team.<br></br>
     In this scenario, one of the main requirements is elevating employee management.</p>
   
   <Row>
    <Col>
    <img width={'400px'} height  src='https://icon-library.com/images/user-icon-image/user-icon-image-18.jpg'/></Col>
   
   <Col>
   <Form>
      

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>User Name </Form.Label>
        <Form.Control type="text" 
         onChange={(e)=>setUname(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" 
         onChange={(e)=>setAge(e.target.value)}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" 
         onChange={(e)=>setDesg(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" 
         onChange={(e)=>setSalary(e.target.value)}
        />
      </Form.Group>

      

            <Button 
            onClick={(e)=>handleAdd(e)}
             variant="primary" type="submit">
        Add
      </Button>
    </Form>

   
   </Col>
   </Row>

    </div>
  )
}

export default Add