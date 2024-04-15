import React from 'react'
import MainScreen from '../components/MainScreen'
import { Accordion, Badge, Button, Card} from "react-bootstrap";
const Bill = ({items}) => {
  {console.log(items)}
  return (

     <MainScreen title={'Your bill is here.'}>
     {items.map((item)=>{
         return <Card style={{margin:10}} key={item._id}>
         <Card.Header style={{display:"flex"}} >
             <span
             style={{color: "black",textDecoration: "none",flex: 1,cursor: "pointer",alignSelf: "center",fontSize: 18,}}>   
             <Accordion.Toggle as={Card.Text} variant="link" eventKey='0'>
              {item}
             </Accordion.Toggle>
             </span>
             <input />
             <div>
             </div>
         </Card.Header>
     </Card>
     })}
     <h1>Total</h1> Rs 430
 </MainScreen>
  )
}

export default Bill