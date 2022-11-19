import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import "../../assets/css/login.css";
import { GET_PROFILE } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import Loader from "../shared/Loader";

import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    const profile = { username: username, password: password };
    const mamad = data?.authors.filter(
      (item) =>
        item.username === profile.username && item.password === profile.password
    );

    if (mamad.length === 0) {
      toast.error("همچین کاربری وجود ندارد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success(`خوش اومدی ${profile.username}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const { loading, data, errors } = useQuery(GET_PROFILE);
  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;

  return (
    <div className="login-box">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Typography
        component="h4"
        variant="h3"
        textAlign="center"
        fontWeight={700}
      >
        ورود
      </Typography>
      <TextField
        label="نام کاربری"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <TextField
        label="رمز عبور"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button variant="contained" onClick={submitHandler}>
        ورود
      </Button>
    </div>
  );
}

export default Login;
