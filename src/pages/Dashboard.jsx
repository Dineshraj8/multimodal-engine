import React from "react";
import Chat from "./components/dashboard/Chat";
import Header from "./components/dashboard/Header";
import Grid from "@mui/material/Grid";
import Slider from "./components/dashboard/Slider";
import Prompts from "./components/dashboard/Prompts";
import Box from "@mui/material/Box";
// import Card from "./components/dashboard/Card";
import "./dashboard.css";
import CardMedia from "@mui/material/CardMedia";
import userImg from "./black.png";
import CardActions from "@mui/material/CardActions";
import Button from '@mui/material/Button';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import MicOffRoundedIcon from '@mui/icons-material/MicOffRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import VideocamOffRoundedIcon from '@mui/icons-material/VideocamOffRounded';
import CallEndRoundedIcon from '@mui/icons-material/CallEndRounded';

const color = {
  backgroundColor: "lightgrey",
};

export default function dashboard() {
  return (
    <>
      <Header />
      <div class="row mt-3 me-2 ms-2">
        <div class="col-md-6">
          <div class="mb-2" style={color}>
            <CardMedia
              component="img"
              height="240"
              image={userImg}
              alt="user image"
            />
          </div>
          <div class="" style={color}>
            <CardMedia
              component="img"
              height="240"
              image={userImg}
              alt="user image"
            />
          </div>
          <div class="">
            <CardActions 
            style={{
              justifyContent:"center",
              alignItems:"center"
            }}>
              <MicRoundedIcon fontSize="large"/>
              <VideocamRoundedIcon fontSize="large"/>  
              <CallEndRoundedIcon fontSize="large"/>                
            </CardActions>
          </div>
        </div>
        <div class="col-md-3" style={color}>
          Chat Box
        </div>
        <div class="col-md-3">
          <div class="mb-2 pb-3" style={color}>
            <Slider Label="Pricing" color="secondary" />
            <Slider Label="User Experience" color="primary" />
            <Slider Label="Emotion" color="success" />
          </div>
          <div class="pb-3" style={color}>
            Prompt Part
          </div>
        </div>
      </div>
    </>
  );
}
