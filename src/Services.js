import React from 'react'
import "./Services.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Services() {
  return (
    <div className='services' id="Services">
    <h1 className='service_head'>My Services</h1>
    <p className='para p_color'>__what i provide__</p><br />
   
   <div className='card_head'>
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="120"
        image="https://image.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg"
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Web developer
        </Typography>
        <Typography variant="body2" color="text.secondary">
         I also develop the websites. Modern and mobile ready websites.
          
        </Typography>
      </CardContent> 
      </Card ><br />

      <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="120"
        image="https://image.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg"
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Web Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Plan,create and code internet sites and web pages with artful designs.
          
        </Typography>
      </CardContent> 
      </Card ><br /><br />
      </div>
      </div>
  )
}

export default Services