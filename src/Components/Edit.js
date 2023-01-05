import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Employee from './Employee';



function Edit() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desg,setDesg]=useState('')
  const [salary,setSalary]=useState(0)

  useEffect(()=>{

    setId(localStorage.getItem('id'))
    setUname(localStorage.getItem('uname'))
    setAge(localStorage.getItem('age'))
    setDesg(localStorage.getItem('desg'))
    setSalary(JSON.parse(localStorage.getItem('salary')))
    

  }, [])
  console.log( id,uname)

  var index= Employee.map(item=>item.id).indexOf(id)
  console.log(index);

  let history=useNavigate()


  const handleUpdate=(e)=>{
    e.preventDefault(); //remove the refreshing function
    console.log(e)

    let emp=Employee[index]
    emp.uname=uname;
    emp.age=age;
    emp.desg=desg;
    emp.salary=salary;
    history('/')
  }

  return (
    <div><h1 className='mt-4 text-center'>Update Employee</h1>
        
    <p className='text-warning mt-4 text-center'>At the heart of every corporate success lies the primary role of strong management. <br></br>
    Employers must display strong leadership and mentorship qualities to bring the best out of the team.<br></br>
     In this scenario, one of the main requirements is elevating employee management.</p>
   
   <Row>
    <Col>
    <img src='https://icon-library.com/images/user-icon-image/user-icon-image-18.jpg'/></Col>
   
   <Col>
   <Form>


      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>User Name </Form.Label>
        <Form.Control type="text" value={uname} onChange={(e)=>setUname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" value={desg} onChange={(e)=>setDesg(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
      </Form.Group>

      

            <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>

   
   </Col>
   </Row>

    </div>
  )
}

export default Edit