import { Button, Container, Grid, Grow, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import Loading from "./Loading";
import NoProduct from "../components/NoProduct";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "40px auto",
  },
  paper: {
    padding: "0px 10px",
    paddingBottom: "30px",
  },
}));

function ToVituralButton({ showroom_img }) {
  return (
    <Link to={`/virtual_view/${showroom_img}`}>
      <Button
        variant="text"
        style={{ background: "linear-gradient(to right, #00c6ff, #0072ff)", color: "white", marginBottom: "20px" }}
      >See Showromm</Button>
    </Link>
  )
}

function ShopDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [showroomImg, setShowroomImg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      if (id) {
        setLoading(true);
        const res = await axios.get(
          process.env.REACT_APP_BASE_URL + `/api/shops/${id}`
        );
        console.log(res.data.showroom_img);
        setProducts(res.data.products);
        setShowroomImg(encodeURIComponent(res.data.showroom_img));
        setLoading(false);
      }
    };
    getProducts();
  }, [id]);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.paper}>
          <ToVituralButton showroom_img={id}/>
          <Grow in>
            <Grid container spacing={3} alignContent="stretch">
              {products
                .slice(0)
                .reverse()
                .map((product, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={index}
                    style={{ display: "flex" }}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
            </Grid>
          </Grow>
          {products.length === 0 && <NoProduct/>}
        </div>
      </Container>
    </div>
  );
}

export default ShopDetail;
