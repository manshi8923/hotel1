import React, { useEffect, useState } from 'react';
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from '../components/MainScreen';
import ReactMarkdown from "react-markdown";
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
const Guests = () => {
    const [error, setError] = useState("");
    const [errfound,setErrFound]=useState(false);
    const [errorDelete, setErrorDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [guests,setGuests]=useState([]);
    const [done,setDone]=useState(false);
    useEffect(()=>{
        setLoading(true);
        fetch("/api/guests/",{
            method:"get",
            headers:{
              "Content-Type":"application/json"
            },
          }).then(res=>res.json())
          .then(data=>{
            if(data.error){
            setErrFound(true);
             setError(data.error);
             console.log("error");
            }
            else{
              setLoading(false);
              setDone(true);
              setError("All the list of guests are here");
              setGuests(data);
              console.log(data);
            }
          })
    },[]);

    const deleteHandler=()=>{

    }
    return (
        <MainScreen title={'All the guests details here'} >
          
            <Link to={'/addguest'}>
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
                    Book a room 
                </Button>
            </Link>
            {errfound&& <ErrorMessage></ErrorMessage>}
            {done && <ErrorMessage>{error}</ErrorMessage>}
            {loading && <Loading></Loading>}
            {
               guests.map((guest) => {
                return <Accordion>
                 <Card style={{margin:10}} key={guest._id}>
                     <Card.Header style={{display:"flex"}} >
                         <span
                         style={{color: "black",textDecoration: "none",flex: 1,cursor: "pointer",alignSelf: "center",fontSize: 18,}}>   
                         <Accordion.Toggle as={Card.Text} variant="link" eventKey='0'>
                           Name :  {guest.name}
                         </Accordion.Toggle>
                         </span>
                         <div>
                             <Button href={`/guest/${guest._id}`}>
                                 Update Status
                             </Button>
                             <Button  variant={guest.book==='unoccupied'?'danger':'success'} className="mx-2"onClick={() => deleteHandler(guest._id)}>
                  {guest.book}Arrived
                 </Button>
                         </div>
                     </Card.Header>

                     <Accordion.Collapse eventKey="0">
               <Card.Body>
                 <h4>
                   <Badge variant="success">
                     Price - Rs {guest.price} 
                   </Badge>
                 </h4>
                 <blockquote className="blockquote mb-0">
                   <ReactMarkdown>{guest.address}</ReactMarkdown>
                   <footer className="blockquote-footer">
                     Booked on{" "}
                     <cite title="Source Title">
                       11 april 2024
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

export default Guests