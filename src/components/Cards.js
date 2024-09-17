import React, { useState } from "react";
import Cardsdata from "./CardData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Style.css";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ADD, DLT, REMOVE } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

function Cards() {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.rootReducer.cartReducer.carts);
  console.log(getData, "getdata");
  const [itemQuantity, setItemQuantity] = useState([]);
  const sendData = (e) => {
    dispatch(ADD(e));

    const quantity = getData?.map((item) => item?.id);
    setItemQuantity(quantity);
  };
  console.log(itemQuantity, "xcvb");
  const dlt = (id) => {
    dispatch(DLT(id));
  };
  const remove = (e) => {
    dispatch(REMOVE(e));
  };
  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart App</h2>

      <div className="row d-flex justify-content-center align-items-center product">
        {Cardsdata.map((element, id) => {
          return (
            <React.Fragment key={Math.random()}>
              <Card
                sx={{ width: "20vw", height: "200", border: "none" }}
                className="mx-4 mt-4 card_style"
              >
                <CardActionArea>
                  <CardMedia
                    className="mt-3"
                    component="img"
                    height="200"
                    image={element.imgdata}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {element.rname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ₹{element.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="d-flex justify-content-center">
                  {getData.find((el) => el?.id === element?.id)?.qnty >= 1 ? (
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{
                        width: 100,
                        cursor: "pointer",
                        background: "#ddd",
                        color: "#111",
                        padding: "2px",
                        borderRadius: 9,
                      }}
                    >
                      <span
                        onClick={
                          getData.find((el) => el?.id === element?.id)?.qnty > 1
                            ? () => remove(element)
                            : () => dlt(element.id)
                        }
                      >
                        <RemoveIcon />
                      </span>

                      <span style={{ fontSize: 22 }}>
                        {getData.some((el) => el?.id === element?.id)
                          ? getData.find((el) => el?.id === element?.id)?.qnty
                          : 0}
                      </span>
                      <span onClick={() => send(element)}>
                        <AddIcon />
                      </span>
                    </div>
                  ) : (
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => sendData(element)}
                    >
                      Add to Cart
                    </Button>
                  )}
                </CardActions>
              </Card>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
