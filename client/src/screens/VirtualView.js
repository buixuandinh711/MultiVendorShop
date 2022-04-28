import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
// import Filters from "../components/Filters";
// import { GlobalState } from "../GlobalState";
// import ProductCard from "../components/ProductCard";
// import Loading from "./Loading";
// import LoadMore from "../components/LoadMore";
// import AddsShow from "../components/AddsShow";
import axios from "axios";
import { Pannellum } from "pannellum-react";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '40px'
  },
}));

function VirtualView() {
  const classes = useStyles();

  const { showroom_img } = useParams();
  const showroomImg = decodeURIComponent(showroom_img);
  console.log(showroomImg);

  return (
    <div className={classes.root}>
      <Pannellum
        width="100%"
        height="500px"
        image={decodeURIComponent(showroomImg)}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
          console.log("panorama loaded");
        }}
      ></Pannellum>
    </div>
  );
}

export default VirtualView;
