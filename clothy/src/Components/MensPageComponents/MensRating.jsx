import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating({rating}) {

    console.log("ratttingpage",rating);
  return (
    <Stack spacing={1}>
      <Rating  defaultValue={rating} precision={0.1} />
      {/* <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /> */}
    </Stack>
  );
}