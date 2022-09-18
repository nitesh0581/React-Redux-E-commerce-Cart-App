import React, { useState, useEffect } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import Table from '@mui/material/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import { DLT } from "../redux/actions/action";

function Header() {


	const [price, setPrice] = useState(0);
	//to access/get the data from reducer we will useSelecetor here
	const getData = useSelector((state) => state.rootReducer.cartReducer.carts);

	const dispatch = useDispatch();


	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const dlt = (id) => {
		dispatch(DLT(id))
	}


	// fn to calculate total price
	useEffect(() => {
		const total = () => {
			let sum = 0;
			getData.map((elem, key) => {
				return (
					sum = elem.price * elem.qnty + sum
				)
			});
			setPrice(sum);
		}
		total();
	})



	return (
		<div className="header">

			<div className="header_logo">
				<NavLink to="/">
					<img className="logo" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
						alt="" style={{ width: "150px", cursor: "pointer" }} />
				</NavLink>
			</div>

			<div className="header_search">
				<input type="text" placeholder="Search Item Here..."/>
			</div>

			<div className="header_buttons">

				{/* <button>Login</button>
				<button>SignUp</button> */}

				<button>
					<Badge badgeContent={getData.length} color="warning"
						id="basic-button"
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
						<ShoppingCartIcon />
					</Badge>
				</button>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					{
						getData.length ?
							<div className="cart_Popup" style={{ width: "24rem", margin: 10 }}>
								<Table>
									<thead>
										<tr>
											<th>Photo</th>
											<th>Restaurant Name</th>
										</tr>
									</thead>
									<hr style={{ width: "220%", backgroundColor: "black", height: "5px" }} />
									<tbody>
										{
											getData.map((e) => {
												return (
													<React.Fragment key={Math.random()}>
														<tr style={{ position: "relative" }}>
															<td>
																<NavLink to={`/cart/${e.id}`} onClick={handleClose}>
																	<img src={e.imgdata} style={{
																		width: "7rem",
																		height: "7rem"
																	}} alt="" />
																</NavLink>
															</td>
															<td>
																<p>{e.rname}</p>
																<p>Price : ₹{e.price}</p>
																<p>Quantity : {e.qnty}</p>
																<p style={{
																	color: "red",
																	fontSize: 20,
																	cursor: "pointer",
																	position: "absolute",
																	top: 0,
																	right: 15
																}}>
																	<DeleteIcon onClick={() => dlt(e.id)} />
																</p>
															</td>
														</tr>
														<hr style={{ width: "220%" }} />
													</React.Fragment>
												)
											})
										}
									</tbody>
									<p className="text-center">Total:₹ {price}</p>
								</Table>
							</div>
							:
							<div className="card_details">
								<div className="close_cart">
									<CloseIcon onClick={handleClose}
										style={{ position: "absolute", cursor: "pointer", top: 2, right: 20, fontSize: 23 }} />
								</div>
								<p>Your cart is empty!</p>
								<img className="cart_image" src="https://react-redux-cart-youtube.netlify.app/cart.gif" alt="" />
							</div>
					}


				</Menu>
			</div>

		</div>

	)
};

export default Header;
