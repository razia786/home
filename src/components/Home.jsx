import React from "react";
import {Card,Button} from "react-bootstrap";
import img from '../img.jpg';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{padding:"30px"}}>
<Card style={{ width: '100%', borderStyle:"none",textAlign:"center",backgroundColor:"lightcyan" }}>
<Card.Img variant="top" style={{height:'100%',width:"500px",alignSelf:"center"}}  src={img} />
  <Card.Body style={{display:"inline"}}>
    <Card.Title style={{fontSize:"40px",fontWeight:"bold"}}>Hey, I'm Razia</Card.Title>
    <Card.Text style={{fontSize:"30px"}}>
      Passionate, Confident and Self-motivated student pursuing undergraduate degree and had a critical experience in learning technologies
    </Card.Text>
    <Button variant="warning"><Link to="/Contact">Contact Me</Link></Button>
  </Card.Body>
</Card>
    </div>
  );
};
export default Home;
