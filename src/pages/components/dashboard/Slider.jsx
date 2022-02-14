import * as React from "react";
import Box from "@mui/material/Box";

import ProgressBar from "react-bootstrap/ProgressBar";

export default function DiscreteSliderMarks(props) {
  return (
    <Box
      sx={{
        width: 200,
        alignItems: "center",
        margin: "auto",
        FontColor: "Black",
        textStyle: "Bold"
      }}
    >
      {props.Label}
      <ProgressBar
        variant={props.color}
        now={props.value}
        
      />
    </Box>
  );
}
