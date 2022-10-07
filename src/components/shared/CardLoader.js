import { Skeleton } from "@mui/material";
import React from "react";

function CardLoader() {
  return (
    <div>
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton animation="wave" height={10} width="40%" />
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} width="80%" />
    </div>
  );
}

export default CardLoader;
