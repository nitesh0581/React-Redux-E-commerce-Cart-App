import React from "react";
import Table from '@mui/material/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {DLT} from "../redux/actions/action";

function CardDetails() {

	// getting the id we are passing of particular product
	// const { id } = useParams();

	const history = useNavigate();

	const dispatch = useDispatch();

	const cartItems = useSelector((state) => state.rootReducer.cartReducer.carts);
	// console.log(getData);

	// const compare = () => {
	//     let compareData = getData.filter((e) => {
	//         return e.id === id
	//     });
	//     setData(compareData);
	// }

	//useEffect will call this function whenever id of selected product changes
	// useEffect(() => {
	//     let compareData = getData.filter((e) => {
	//         return e.id === id
	//     });
	//     setData(compareData);
	// }, [id])


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
						cartItems.map((ele) => {
							return (
								<React.Fragment key={Math.random()}>
									<div className="items_img">
										<img src={ele.imgdata} alt="" style={{maxHeight: "300px"}}/>
									</div>

									<div className="details">
										<Table>
											<tr>
												<td>
													<p><strong>Resturant:</strong> {ele.rname}</p>
													<br/>
													<p><strong>Price:</strong> ₹ {ele.price}</p>
													<br/>
													<p><strong>Dishes:</strong> {ele.address}</p>
													<br/>
													<p><strong>Total:</strong> ₹ 300</p>
												</td>
												<td>
													<p><strong>Rating: </strong><span style={{
														backgroundColor: "green",
														padding: "2px 2px",
														borderRadius: "5px",
														color: "white"
													}}> {ele.rating}★</span></p>
													<br/>
													<p><strong>Order Review: </strong> {ele.somedata}</p>
													<br/>
													<p><strong>Remove: </strong><DeleteIcon
														style={{cursor: "pointer", color: "red", fontSize: "25"}} onClick={() => dlt(ele.id)}/></p>
													<br/>
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
