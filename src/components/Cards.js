import React from "react";
import Cardsdata from "./CardData";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Style.css";
import {Button, CardActionArea, CardActions} from '@mui/material';
import {ADD} from "../redux/actions/action";
import {useDispatch} from "react-redux";


function Cards() {

	const dispatch = useDispatch();

	const sendData = (e) => {
		dispatch(ADD(e))
	}

	return (
		<div className='container mt-3'>
			<h2 className='text-center'>Add to Cart Projects</h2>

			<div className="row d-flex justify-content-center align-items-center product">
				{
					Cardsdata.map((element, id) => {
						return (
							<React.Fragment key={Math.random()}>
								<Card sx={{width: "20vw", height: "200", border: "none"}}
								      className="mx-4 mt-4 card_style">
									<CardActionArea>
										<CardMedia className="mt-3"
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
									<CardActions style={{justifyContent: 'center'}}>

										<Button size="small" variant="contained" onClick={() => sendData(element)}>
											Add to Cart
										</Button>
									</CardActions>
								</Card>
							</React.Fragment>
						)
					})
				}
			</div>
		</div>
	)
};

export default Cards;
