import { Typography, Container, Avatar, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Header = ({ setDark, dark }) => {
  return (
    // <AppBar position="sticky">
    //   <Container maxWidth="lg">
    //     <Toolbar>
    //       <Typography component="h1" variant="h5" fontWeight="500" flex={1}>
    //         <Link to="/">وبلاگ</Link>
    //       </Typography>
    //       <BookIcon />
    //     </Toolbar>
    //   </Container>
    // </AppBar>
    <header style={{ marginBottom: 50 }}>
      <Container>
        <nav>
          <Typography component="h1" variant="h5" flex={1}>
            <Link
              style={{ color: "rgb(88, 90, 94)", fontWeight: "900" }}
              to="/"
            >
              وبلاگ
            </Link>
          </Typography>

          <Box
            component="div"
            variant="div"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <div className="toggle-btn" id="_1st-toggle-btn">
              <input
                type="checkbox"
                onChange={() => {
                  setDark(!dark);
                }}
              />
              <span></span>
            </div>

            {/* <Avatar /> */}
            <Link to="/login">
              <Button variant="outlined" size="small" sx={{ borderRadius: 3 }}>
                ورود
              </Button>
            </Link>
          </Box>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
