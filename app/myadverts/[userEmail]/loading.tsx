"use client";
import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto m-4 flex">
      <Skeleton
        variant="rectangular"
        width="30%"
        height={300}
        animation="wave"
        sx={{ borderRadius: "3px", margin: "5px" }}
      />
      <Skeleton
        variant="rectangular"
        width="70%"
        height={150}
        animation="wave"
        sx={{ borderRadius: "3px", margin: "5px" }}
      />
    </div>
  );
}
