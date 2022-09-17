import React from "react";
import Table from '@mui/material/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

function CardDetails() {


	// getting the id we are passing of particular product
	const { id } = useParams();

	// use to navigate objects from nested child component to parent page
	const history = useNavigate();

	// used to send data
	const dispatch = useDispatch();

	// getting items in cart
	const cartItems = useSelector((state) => state.rootReducer.cartReducer.carts);

	// add quantity

	const send=(e)=>{
		dispatch(ADD(e));
	}

	// remove one quantity
	const remove = (item)=>{
		dispatch(REMOVE(item))
	  }


	const dlt = (id) => {
		dispatch(DLT(id));
		history("/");
	}

	return (
		<div className="container mt-2">
			<h2 className="text-center">My Cart Page</h2>

			<section className="container mt-3">
				<div className="itemsdetails">
					{
						cartItems.filter((ele) => ele.id ==id).map((ele) => {

							return (
								<React.Fragment key={ele.id}>
									<div className="items_img">
										<img src={ele.imgdata} alt="" style={{ height: "300px" }} />
									</div>

									<div className="details">
										<Table>
											<tr>
												<td>
													<p><strong>Restaurant:</strong> {ele.rname}</p>
													<br />
													<p><strong>Price:</strong> ₹ {ele.price}</p>
													<br />
													<p><strong>Dishes:</strong> {ele.address}</p>
													<br />
													<p><strong>Total:</strong> ₹ {ele.price * ele.qnty}</p>
													<div className="mt-4 d-flex justify-content-between align-items-center" style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111", padding: 5 }}>
														<span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
														<span style={{ fontSize: 22 }}>{ele.qnty}</span>
														<span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>
													</div>
												</td>
												<td>
													<p><strong>Rating: </strong><span style={{
														backgroundColor: "green",
														padding: "2px 2px",
														borderRadius: "5px",
														color: "white"
													}}> {ele.rating}★</span></p>
													<br />
													<p><strong>Order Review: </strong> {ele.somedata}</p>
													<br />
													<p><strong>Remove: </strong><DeleteIcon
														style={{ cursor: "pointer", color: "red", fontSize: "25" }} onClick={() => dlt(ele.id)} /></p>
													<br />
												</td>
											</tr>
										</Table>
									</div>
								</React.Fragment>
							)
						})
					}

				</div>
			</section>
		</div>
	)
};

export default CardDetails;
