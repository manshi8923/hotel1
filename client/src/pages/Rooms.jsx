import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from '../components/MainScreen';
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import {toast} from "react-toastify";
const Rooms = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [occupied,setOccupied]=useState(0);
  const [unoccupied,setUnoccupied]=useState(0);
  useEffect(() => {
    setLoading(true);
    fetch("/api/rooms/", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(true);
          setErrorMessage(data.error);
          toast.error("Error occur in server side")
        }
        else {
          setLoading(false);
          setRooms(data);
          const unoccupy = data.filter(item => item.book === 'unoccupied');
          console.log(unoccupy.length);
          setOccupied(unoccupy.length);
          const occupy=48-unoccupy.length;
          setUnoccupied(occupy);
          toast.success("Updated status of room")
        }
      })
  }, []);
  
  return (
    <MainScreen title={'All the Rooms status are here.'} >
      <Card style={{ margin:10, width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item variant='success'>{occupied} Booked Rooms</ListGroup.Item>
          <ListGroup.Item variant='danger'>{unoccupied} Vacant Rooms</ListGroup.Item>
        </ListGroup>
      </Card>
      <Link to={'/addguest'}>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
          Book a Room for a guest
        </Button>
      </Link>
      {error&&<ErrorMessage>{errorMessage}</ErrorMessage>}
      {loading && <Loading></Loading>}
      {
        rooms.map((room) => {
          return <Accordion>
            <Card style={{ margin: 10 }} key={room._id}>
              <Card.Header style={{ display: "flex" }} >
                <span
                  style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey='0'>
                    RoomNo:  {room.roomNo}
                  </Accordion.Toggle>
                </span>
                <div>
                  <Button href={`/room/${room._id}`}>
                    Update 
                  </Button>
                  <Button variant={room.book === 'unoccupied' ? 'danger' : 'success'} className="mx-2">
                    {room.book}
                  </Button>
                </div>
              </Card.Header>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge variant="success">
                      Price - Rs {room.price}
                    </Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <span style={{color:'red',margin:'4'}} >Cleaning Status : {room.cleaningStatus}</span>
                    <footer className="blockquote-footer">
                      Booked on{" "}
                      <cite title="Source Title">
                       {room.bookedOn} &nbsp; By {room.bookedBy}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        })
      }
    </MainScreen>
  )
}

export default Rooms