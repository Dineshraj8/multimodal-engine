import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {

   return (

    // <CardMedia
    //   component="img"
    //   height="140"
    //   image=""
    //   alt="user image"
    // />


    <>
      <div id="container">
       { navigator.mediaDevices.getUserMedia()
              .then(function (stream) {
                console.log("Something went wrong!");
              })
              .catch(function (error) {
                console.log("Something went wrong!");
              })}
       
      </div>
    </>

  );
}





