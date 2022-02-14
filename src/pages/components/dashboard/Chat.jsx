import * as React from "react";

export default function Chat() {
  var video = document.querySelector("#videoElement"); 

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (error) {
          console.log("Something went wrong!");
        })}


  return (
    <>
      <div id="container">
        <video autoplay="true" id="videoElement">          
        </video>
      </div>
    </>
  );
}
