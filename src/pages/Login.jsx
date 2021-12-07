import React from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Login() {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/dashboard`; 
    history.push(path);
  }



  return (
    <div
      className=" container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh"}}
    >
      <Typography
        variant="h4"
      >
        Login Page
      </Typography>
      
      <TextField
        margin="normal"
        id="outlined-basic margin-normal"
        label="Meeting Id"
        variant="outlined"
      />
      <TextField
        margin="normal"
        id="outlined-basic margin-normal"
        label="Password"
        variant="outlined"
        type="password"
      />
      <Button
        className="mt-3"
        variant="contained"
        onClick={routeChange}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
