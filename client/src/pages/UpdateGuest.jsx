import React, { useEffect, useState } from 'react'
import MainScreen from '../components/MainScreen'
import { Button, Card, Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Loading from '../components/Loading';
import {toast} from "react-toastify";
const UpdateGuest = () => {
    const [loading,setLoading]=useState(false);
    const [done,setDone]=useState(false);
    const [ErrorMessage,setErrorMessage]=useState("");
    const [params,setParams]=useState("");
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
    const [days,setDays]=useState("");
    const [arrival,setArrival]=useState("");
    const [depart,setDepart]=useState("");
    const [bill,setBill]=useState("");
    const [price,setPrice]=useState("");
    useEffect(()=>{
      const id=window.location.pathname.substring(6);
      setParams(id);
    },[])
    const updateHandler=async()=>{
      setLoading(true);
      await fetch(`/api/guests/${params}`,{
        method:"put",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:name,
          email:email,
          address:address,
          phone:phone,
          days:days,
          arrival:arrival,
          depart:depart,
          bill:bill,
          price:price
        })
      }).then(res=>res.json())
      .then(data=>{
        if(data.error){
          toast.error("Error occur while updating a status of a room")
        }
        else{
          toast.success("Status updated successful!");
          navigate('/guests');
        }
      })
    }
  return (
    <MainScreen title={"Update the Status of Guest"}>
    <Card>
   <Card.Header>Edit The Status of guest</Card.Header>
   <Card.Body>
     <Form onSubmit={updateHandler} action="/guests">
       {loading && <Loading/>}
       {done && (
         <ErrorMessage variant="success">{"Status Updated Succesfully"}</ErrorMessage>
       )}
       <Form.Group controlId="title">
         <Form.Label>Name</Form.Label>
         <Form.Control
           type="title"
           placeholder="Enter the title"
           value={name}
           onChange={(e)=>setName(e.target.value)}
         />
       </Form.Group>

       <Form.Group controlId="title">
         <Form.Label>Email</Form.Label>
         <Form.Control
           type="email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           placeholder="Enter the title"
         />
       </Form.Group>
       <Form.Group controlId="title">
         <Form.Label>Address</Form.Label>
         <Form.Control
           type="title"
           placeholder="Enter the Address"
           value={address}
           onChange={(e)=>setAddress(e.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="title">
         <Form.Label>Phone</Form.Label>
         <Form.Control
           type="Number"
           placeholder="Enter your phone Number"
           value={phone}
           onChange={(e)=>setPhone(e.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="content">
         <Form.Label>Arrival Date</Form.Label>
         <Form.Control
           type='date'
           placeholder="Enter the content"
           value={arrival}
           onChange={(e)=>setArrival(e.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="title">
         <Form.Label>Depart Date</Form.Label>
         <Form.Control
           type='date'
           placeholder="Enter the content"
           value={depart}
           onChange={(e)=>setDepart(e.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="content">
         <Form.Label>Room Price</Form.Label>
         <Form.Control
           type="content"
           value={price}
           placeholder="Updating the Price"
           onChange={(e)=>setPrice(e.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="content">
         <Form.Label>Bill</Form.Label>
         <Form.Control
           type="content"
           value={bill}
           placeholder="Updating the Price"
           onChange={(e)=>setBill(e.target.value)}
         />
       </Form.Group>
       {loading && <Loading size={50} />}
       <Button variant="primary" type="submit">
         Update Room status
       </Button>
       <Button
         className="mx-2"
         variant="danger"
         onClick={() =>navigate('/generatebill')}
       >
       Generate Bill
       </Button>
     </Form>
   </Card.Body>

   <Card.Footer className="text-muted">
     Updated on - 11 april 2023
   </Card.Footer>
 </Card>
</MainScreen>
)
}

export default UpdateGuest