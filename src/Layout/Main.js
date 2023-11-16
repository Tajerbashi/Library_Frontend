import React from "react";
import SliderComponent from "../components/Slider/SliderComponent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Main = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SliderComponent height={'h-400'}/>
        </Grid>
        <Grid item xs={3}>
          <SliderComponent height={'h-300'}/>
        </Grid>
        <Grid item xs={3}>
          <SliderComponent height={'h-250'}/>
        </Grid>
        <Grid item xs={3}>
          <SliderComponent height={'h-100'}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
