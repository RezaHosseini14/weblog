import React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container>
      <Typography
        component="h1"
        variant="h1"
        color="text-secondary"
        fontWeight={700}
        sx={{ textAlign: "center" }}
        mt={10}
      >
        404
      </Typography>

      <Typography
        component="h2"
        variant="h3"
        color="text-secondary"
        sx={{ textAlign: "center" }}
      >
        صفحه مورد نظر یافت نشد
      </Typography>

      <Typography
        component="h3"
        variant="h6"
        color="text-secondary"
        sx={{ textAlign: "center" }}
      >
        با عرض پوزش از شما، چنین صفحه‌ای در سایت وجود ندارد یا این صفحه از سایت
        پاک شده است.
      </Typography>

      <Typography
        component="h3"
        variant="p"
        sx={{ textAlign: "center" }}
        mt={2}
      >
        <Link
          style={{
            display: "inline-flex",
            alignItems: "start",
            justifyContent: "center",
            gap: 1,
            fontWeight: "500",
          }}
          
          to="/"
        >
          بازگشت به صفحه اول
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width={25}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
      </Typography>
    </Container>
  );
}

export default NotFound;
