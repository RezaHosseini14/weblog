import { Container, Grid, Typography } from "@mui/material";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography
            className="bf_title"
            component="h3"
            variant="h5"
            mb={3}
            fontWeight="700"
            display="flex"
            alignItems="center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_7_6701)">
                <path
                  d="M14.68 8.4C14.68 9.46 14.38 10.45 13.83 11.29C13.79 11.37 13.74 11.44 13.69 11.51C12.73 12.89 11.12 13.8 9.32001 13.8C6.36001 13.8 3.95001 11.38 3.95001 8.4C3.95001 5.42 6.36001 3 9.32001 3C11.13 3 12.74 3.91 13.69 5.29C13.74 5.36 13.79 5.43 13.83 5.52C14.38 6.36 14.68 7.35 14.68 8.41V8.4Z"
                  stroke="inherit"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.5 8.39998C20.5 10.6 18.73 12.38 16.55 12.38C15.5 12.38 14.55 11.97 13.84 11.29C14.39 10.45 14.69 9.45998 14.69 8.39998C14.69 7.33998 14.39 6.34998 13.84 5.50998C14.55 4.82998 15.5 4.41998 16.55 4.41998C18.73 4.41998 20.5 6.19998 20.5 8.39998Z"
                  stroke="inherit"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 21C6.11 16.58 12.46 16.56 15.1 20.95L15.13 21"
                  stroke="inherit"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.16 20.1C18.74 18.64 17.74 17.5 16.48 17.01L17.67 15.82"
                  stroke="inherit"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_6701">
                  <rect width="24" height="24" fill="inherit" />
                </clipPath>
              </defs>
            </svg>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            className="bf_title"
            component="h3"
            variant="h5"
            mb={3}
            fontWeight="700"
            display="flex"
            alignItems="center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_7_6787)">
                <path
                  d="M7.88 17.74L4.01001 18.29C3.65001 18.34 3.39 18.09 3.44 17.72L3.98999 13.83C4.04999 13.38 4.26003 12.96 4.59003 12.62L13.79 3.37C15.03 2.12 17.03 2.12 18.27 3.37C19.51 4.62 19.51 6.63 18.27 7.87L9.07001 17.12C8.75001 17.46 8.33 17.67 7.88 17.73V17.74Z"
                  stroke="inherit"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M15.73 5.96002L14.4 7.30003"
                  stroke="inherit"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M13.61 20.44H19.44"
                  stroke="inherit"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_6787">
                  <rect width="24" height="24" fill="inherit" />
                </clipPath>
              </defs>
            </svg>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
