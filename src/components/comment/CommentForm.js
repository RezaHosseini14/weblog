import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../shared/Loader";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("لطفا تمام فیلد ها را پرکنید");
    }
  };
  if (data && pressed) {
    toast.success("کامنت ارسال شد و منتظر تایید می باشد");
    setPressed(false);
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          component="p"
          variant="h6"
          fontWeight={700}
          color="primary"
          display="flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_7_6847)">
              <path
                d="M8.08999 20.34L3.55999 20.99C3.47999 21.01 3.40999 21 3.32999 20.99C3.25999 20.97 3.18999 20.93 3.12999 20.87C3.06999 20.82 3.03999 20.75 3.00999 20.67C2.98999 20.6 2.97999 20.52 3.00999 20.44L3.65999 15.91C3.72999 15.39 3.96999 14.92 4.33999 14.55L14.84 4.06C15.18 3.72 15.57 3.46 16.01 3.28C16.45 3.1 16.92 3 17.39 3C17.86 3 18.33 3.09 18.77 3.28C19.21 3.46 19.61 3.73 19.94 4.06C20.28 4.39 20.54 4.79001 20.72 5.23001C20.9 5.67001 21 6.13999 21 6.60999C21 7.07999 20.91 7.54999 20.72 7.98999C20.54 8.42999 20.27 8.83 19.94 9.16L9.49999 19.66C9.11999 20.04 8.61999 20.27 8.08999 20.34Z"
                stroke="inherit"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M17.03 6.98001L15.51 8.48999"
                stroke="inherit"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_7_6847">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={(e) => setText(e.target.value)}
          value={text}
          multiline
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            درحال ارسال ...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
