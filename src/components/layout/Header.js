import { AppBar, Toolbar, Typography, Container, Avatar } from "@mui/material";
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
    <header style={{marginBottom:50}}>
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
            <div class="toggle-btn" id="_1st-toggle-btn">
              <input
                type="checkbox"
                onChange={() => {
                  setDark(!dark);
                }}
              />
              <span></span>
            </div>

            <Avatar />
          </Box>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
