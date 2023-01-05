import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserPlus, FaUserEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


function Home() {

    const history=useNavigate();

    const handleDelete=(id)=>{
        alert('Deleted')
        let index=Employee.map(item=>item.id).indexOf(id);
        Employee.splice(index,1);
        console.log(Employee)
        history('/')
    }
    const handleEdit=(id, uname, age, desg, salary)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("uname",uname);
        localStorage.setItem("age",age);
        localStorage.setItem("desg",desg);
        localStorage.setItem("salary",JSON.stringify(salary));

    }

  return (
    <div className='text-center'>
        <h1 className='mt-4'>Employee Management</h1>
        
        <p className='text-warning mt-4'>At the heart of every corporate success lies the primary role of strong management. <br></br>
        Employers must display strong leadership and mentorship qualities to bring the best out of the team.<br></br>
         In this scenario, one of the main requirements is elevating employee management.</p>
        
        <Link to={'/add'}>
        <Button variant='success'><FaUserPlus/> Add Employee</Button>
        </Link>
        <br></br><br></br>
        <Table striped bordered hover>

<thead>
    
  <tr>
  <th >ID</th>
    <th >USER NAME</th>
    <th>AGE</th>
    <th>DESIGNATION</th>
    <th>SALARY</th>
    <th>ACTION</th>
  </tr>
</thead>
<tbody>
  {
    Employee && Employee.length > 0 ?
    Employee.map((item)=>(
        <tr>
            <td>{item.id}</td>
            <td>{item.uname}</td>
            <td>{item.age}</td>
            <td>{item.desg}</td>
            <td>{item.salary}</td>
            <td><Link to={'/edit'}>
                <Button className='btn btn-dark me-3' onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)}><FaUserEdit/></Button>
                </Link>

           
            <Button onClick={()=>handleDelete(item.id)} variant="danger"><FaTrash/></Button></td>
            
        </tr>
    )):'Error'
  }
</tbody>
</Table></div>
    
  )
}

export default Home