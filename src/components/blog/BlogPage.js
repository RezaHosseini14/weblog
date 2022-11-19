import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POSTS_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import sanitizeHtml from "sanitize-html";
import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";
import { timeContent } from "../functions/timeContent";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, errors } = useQuery(GET_POSTS_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;
  return (
    <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
      <Grid
        className="sp_box"
        container
        sx={{
          boxShadow: "rgb(0 0 0 / 10%) 0 4px 12px",
          backgroundColor: "#fff",
        }}
        borderRadius={5}
        padding={3}
      >
        <Grid
          item
          xs={12}
          display="flex"
          mt={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            component="h2"
            variant="h4"
            color="text.primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>

          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_7_6861)">
                <path
                  d="M21.21 12H3.75"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.18 20L3.41999 12.57C3.13999 12.26 3.13999 11.75 3.41999 11.44L10.18 4.01001"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_6861">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>

        <Grid item display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />

          <Box component="div">
            <Typography component="p" variant="h5">
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>

        <Button
          variant="contained"
          size="small"
          sx={{ width: "20%", borderRadius: 3 }}
        >
          {timeContent(data.post.content.html)}
        </Button>

        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>

        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
