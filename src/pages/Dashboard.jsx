import React, { useState, useEffect } from "react";
import Card from "./components/dashboard/Card";
import Header from "./components/dashboard/Header";
import Grid from "@mui/material/Grid";
import Slider from "./components/dashboard/Slider";
import Prompts from "./components/dashboard/Prompts";
import Box from "@mui/material/Box";
import "./dashboard.css";
import CardMedia from "@mui/material/CardMedia";
import userImg from "./black.png";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import MicOffRoundedIcon from "@mui/icons-material/MicOffRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";
import CallEndRoundedIcon from "@mui/icons-material/CallEndRounded";
// import sampleVideo from "./sample_video.mp4";

const color = {
  backgroundColor: "",
};

export default function Dashboard() {
  const [initData, setData] = useState([{}]);

  useEffect(() => {
    fetch("/emo")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Header />
      <div class="row mt-3 me-2 ms-2">
        {/* <div class="col-md-6">
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MicRoundedIcon fontSize="large" />
              <VideocamRoundedIcon fontSize="large" />
              <CallEndRoundedIcon fontSize="large" />
            </CardActions>
          </div>
        </div>
        <div class="col-md-3" style={color}></div> */}
        <div class="col-md-3">
          <div class="mb-2 pb-3" style={color}>
            <Slider
              Label="Happy"
              color="success"
              value={initData.happy * 100}
            />
            <Slider
              Label="Disgust"
              color="info"
              value={initData.disgust * 100}
            />
            <Slider Label="Fear" color="warning" value={initData.fear * 100} />
            <Slider Label="Angry" color="danger" value={initData.angry * 100} />
            <Slider
              Label="Neutral"
              color="blue"
              value={initData.neutral * 100}
            />
            <Slider
              Label="Surprise"
              color="black"
              value={initData.surprise * 100}
            />
            <Slider Label="Sad" color="danger" value={initData.sad * 100} />
          </div>
          <div class="pb-3" style={color}></div>
        </div>
      </div>
    </>
  );
}
