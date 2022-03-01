import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import "./Dashboard.css";
import Shot from '../../function/Screenshot'
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
      <Header/>
      {/* <Shot/> */}
      <div class="row mt-3 me-2 ms-2">
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
