import {
    Card,
    CardActionArea,
    CardContent,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    title: {
        textTransform: "capitalize",
        padding: "20px 0px",
    },
});

function NoProduct({ loading }) {
    const classes = useStyles();

    return (
        <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
        >
            No Selling Product
        </Typography>
    );
}

export default NoProduct;