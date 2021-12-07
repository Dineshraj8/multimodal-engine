import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}%`;
}

export default function DiscreteSliderMarks(props) {


    const marks = [
        {
          value: 0,
          label: "sad",
        },
        
        {
          value: 100,
          label: "Happy",
        },
      ];

  return (
    <Box sx={{ 
      width: 200,
      alignItems:"center",
      margin:"auto"
       }}>
         {props.Label}
      <Slider
        aria-label="default"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        width="50px"
        color={props.color}
      />
    </Box>


  );
}
