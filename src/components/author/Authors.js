import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import React from "react";
import Loader from "../shared/Loader";

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;
  const { authors } = data;
  return (
    <div className="sp_authors">
      <Grid
        container
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
          // borderRadius: 4,
          // backgroundColor: "#fff",
        }}
      >
        {authors.map((author, index) => (
          <React.Fragment key={author.id}>
            <Grid item xs={12} padding={2}>
              <Link
                to={`/authors/${author.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  gap: ".5rem",
                }}
              >
                <Avatar src={author.avatar.url} />
                <Typography component="p" variant="p" color="text.secondary">
                  {author.name}
                </Typography>
              </Link>
            </Grid>
            {index !== authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default Authors;
