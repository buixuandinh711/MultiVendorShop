import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { Pannellum } from "pannellum-react";
import { useParams } from "react-router";
import Iframe from 'react-iframe';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '40px'
  },
}));

function VirtualView() {
  const classes = useStyles();

  const { id } = useParams();

  console.log(process.env.REACT_APP_BASE_URL + "/virtual-showroom/" + id + "/index.html");

  return (
    <div className={classes.root}>
      <Iframe url={process.env.REACT_APP_BASE_URL + "/virtual-showroom/" + id + "/index.html"}
        width="100%"
        height="600px"
        display="initial"
        position="relative" />
    </div>
  );
}

export default VirtualView;
