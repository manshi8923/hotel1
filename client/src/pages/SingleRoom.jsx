import React, { useEffect, useState } from "react";
import MainScreen from '../components/MainScreen'
import { Button, Card, Form } from "react-bootstrap";
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
const SingleRoom = ({match}) => {
    const [roomNo,setRoomNo]=useState();
    const [book,setBook]=useState();
    const [cleaningStatus,setCleaningStatus]=useState();
    const [price,setPrice]=useState(0);
    const [bookedOn,setBookedOn]=useState("");
    const [bookedBy,setBookedBy]=useState();
    const [params,setParams]=useState("");
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
      const id=window.location.pathname.substring(6);
      setParams(id);
    },[])
    const updateHandler=async()=>{
      setLoading(true);
      await fetch(`/api/rooms/${params}`,{
        method:"put",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          roomNo:roomNo,
          book:book,
          cleaningStatus:cleaningStatus,
          price:price,
          bookedOn:bookedOn,
          bookedBy:bookedBy
        })
      }).then(res=>res.json())
      .then(data=>{
        if(data.error){
          toast.error("Error occur while updating a status of a room")
        }
        else{
          toast.success("Booking successful!");
          navigate('/rooms');
        }
      })
    }
  return (
    <MainScreen title={"Update the Status of Room"}>
         <Card>
        <Card.Header>Edit The Room Status</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler} action="/rooms">
            {loading && <Loading />}
            <Form.Group controlId="title">
              <Form.Label>RoomNo</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={roomNo}
                onChange={(e) => setRoomNo(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Book</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the content"
                rows={4}
                value={book}
                onChange={(e) => setBook(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Current Price</Form.Label>
              <Form.Control
                type="content"
                placeholder="Updating the Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>cleaningStatus</Form.Label>
              <Form.Control
                type="content"
                placeholder="Current Cleaning Status"
                value={cleaningStatus}
                onChange={(e) => setCleaningStatus(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Booked On</Form.Label>
              <Form.Control
                type="date"
                placeholder="Current Cleaning Status"
                value={bookedOn}
                onChange={(e) => setBookedOn(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Booked By</Form.Label>
              <Form.Control
                type="content"
                placeholder="Current Cleaning Status"
                value={bookedBy}
                onChange={(e) => setBookedBy(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button variant="primary" type="submit">
              Update Room status
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => navigate('/rooms')}
            >
             Go to the Dashboard
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

export default SingleRoom