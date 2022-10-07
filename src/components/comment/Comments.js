import { useQuery } from "@apollo/client";
import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import Loader from "../shared/Loader";

function Comments({ slug }) {
  const { loading, data, errors } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  if (loading) return <Loader />;

  return (
    <>
      {data.comments.length == 0 ? null : (
        <Grid
          container
          sx={{
            boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
            borderRadius: 4,
            py: 1,
            mt: 8,
          }}
        >
          <Grid item xs={12} m={2}>
            <Typography
              component="p"
              variant="h6"
              fontFamily={700}
              color="primary"
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
                <g clip-path="url(#clip0_7_6869)">
                  <path
                    d="M8.45002 13.99C8.64002 14.92 9.04 15.8 9.62 16.56C10.21 17.32 10.96 17.93 11.84 18.35C12.7 18.77 13.66 19 14.62 19C15.58 19 16.54 18.79 17.41 18.38C17.61 18.28 17.84 18.25 18.05 18.3L20.23 18.82C20.31 18.84 20.39 18.84 20.47 18.82C20.55 18.8 20.62 18.76 20.68 18.7C20.74 18.64 20.77 18.57 20.79 18.5C20.82 18.42 20.82 18.34 20.79 18.27L20.27 16.13C20.22 15.92 20.24 15.69 20.35 15.5C20.79 14.61 21 13.63 20.98 12.64C20.95 11.65 20.7 10.68 20.21 9.81001C19.74 8.94001 19.05 8.20003 18.22 7.64003C17.39 7.08003 16.44 6.73002 15.44 6.60002C14.45 6.48002 13.43 6.59003 12.49 6.92003C11.55 7.25003 10.7 7.81001 10.01 8.53001C9.33002 9.25001 8.82999 10.13 8.54999 11.08C8.27999 12.03 8.24001 13.03 8.44001 14L8.45002 13.99Z"
                    stroke="inherit"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.55 6.90001C11.91 6.15001 11.06 5.59 10.12 5.27C9.18 4.95 8.14999 4.91003 7.17999 5.14003C6.19999 5.36003 5.31001 5.85002 4.60001 6.54002C3.89001 7.23002 3.38999 8.10001 3.14999 9.06001C2.85999 10.22 2.97 11.45 3.47 12.54C3.6 12.79 3.63 13.08 3.56 13.35L2.98999 15.68L5.35999 15.12C5.63999 15.05 5.94 15.09 6.19 15.21C6.89 15.52 7.65001 15.68 8.42001 15.68H9"
                    stroke="inherit"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_6869">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              کامنت ها
            </Typography>
            {data.comments.map((comment) => (
              <Grid
                item
                xs={12}
                key={comment.id}
                m={2}
                p={2}
                border="1px solid silver"
                borderRadius={1}
              >
                <Box component="div" display="flex" alignItems="center" mb={1}>
                  <Avatar> {comment.name[0]}</Avatar>
                  <Typography
                    component="span"
                    variant="p"
                    fontFamily={700}
                    mr={1}
                  >
                    {comment.name}
                  </Typography>
                </Box>
                <Typography component="p" variant="p">
                  {comment.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Comments;
