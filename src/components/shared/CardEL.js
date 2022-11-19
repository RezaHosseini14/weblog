import { Link } from "react-router-dom";

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { timeContent } from "../functions/timeContent";

function CardEL({ title, slug, author, coverPhoto,content }) {
  return (
    <Card
      className="sp_card"
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        padding: 1.5,
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
        sx={{ borderRadius: ".5rem" }}
      />

      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
          height="3rem"
        >
          {title}
        </Typography>
      </CardContent>

      {author && (
        <CardHeader
          style={{ paddingRight: 0 }}
          avatar={
            <Avatar
              src={author.avatar.url}
              sx={{ marginLeft: 1, width: "2.5rem", height: "2.5rem" }}
            />
          }
          title={
            <Typography
              component="p"
              variant="p"
              color="text.secondary"
              fontWeight={600}
            >
              {author.name}
            </Typography>
          }
        />
      )}

      {/* <Button
        variant="contained"
        size="small"
        sx={{ width: "20%", borderRadius: 3 }}
      >
        {
          timeContent(content)
        }
      </Button> */}

      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
