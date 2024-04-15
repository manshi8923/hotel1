import React, { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from '../components/MainScreen';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
  const [UserName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const submitHandler=()=>{
    if(UserName=='admin'&&password=='12345'){
      toast.success("login successfull");
      navigate('/rooms');
    }
    else{
      toast.error("Invalid credentials");
    }
  }
  return (
    <MainScreen title="LOGIN">
    <div className='big'>
    <div id='login'>
    </div>
    <div className='loginContainer'>
      <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              value={UserName}
              placeholder="Enter email"
              onChange={(e)=>setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary"  style={{marginTop:'15px'}} onClick={submitHandler}>
            Submit
          </Button>
        </Form>
        {/* <Row className="py-3">
          <Col>
           Want to  <Link to="/change/credentials"> Change Credentials</Link>
          </Col>
        </Row> */}
      </div>
    </div>
    </MainScreen>
  )
}

export default Login