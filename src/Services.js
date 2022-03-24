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
         App Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          
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
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          
        </Typography>
      </CardContent> 
      </Card ><br /><br />
      </div>
      </div>
  )
}

export default Services