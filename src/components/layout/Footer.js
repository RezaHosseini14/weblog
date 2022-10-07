import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer style={{ marginTop: "auto" }}>
      <Typography
        component="p"
        variant="p"
        color="white"
        padding="10px"
        textAlign="center"
        height={60}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        وبلاگ شخصی
      </Typography>
    </footer>
  );
}

export default Footer;
