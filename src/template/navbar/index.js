import React, { Component } from "react";
import { Menu } from "../../component";
import "./navbar.css";
import Swal from "sweetalert2";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	checkActivePage = (checkPage) => {
		const page = this.props.page;
		if (checkPage === page) return "active";
		return "";
	};
	checkLogin() {
		const { loginStatus, goToPage } = this.props;
		return (
			<Menu
				activePage={this.checkActivePage("productList")}
				redirect={() =>
					loginStatus
						? goToPage("productList")
						: Swal.fire(
								"Kijang Satu ganti",
								"Penyusup, bukan Admin Banteng",
								"error"
						  )
				}
			>
				ProductList
			</Menu>
		);
	}
	render() {
		const goToPage = this.props.goToPage;
		return (
			<>
				<div className="topnav">
					<div className="logo">Tokopedei</div>
					<div className="topnav-right">
						<Menu
							activePage={this.checkActivePage("home")}
							redirect={() => goToPage("home")}
						>
							Home
						</Menu>
						<Menu
							activePage={this.checkActivePage("about")}
							redirect={() => goToPage("about")}
						>
							About
						</Menu>
						{this.checkLogin()}
						{/* <Menu
              activePage={this.checkActivePage("form")}
              redirect={() => goToPage("form")}
            >
              Form
            </Menu> */}
						<Menu
							activePage={this.checkActivePage("pembelian")}
							redirect={() => goToPage("pembelian")}
						>
							Pembelian
						</Menu>
						<Menu
							activePage={this.checkActivePage("labaRugi")}
							redirect={() => goToPage("labaRugi")}
						>
							Laba Rugi
						</Menu>
						<Menu
							activePage={this.checkActivePage("penjualan")}
							redirect={() => goToPage("penjualan")}
						>
							Penjualan
						</Menu>
						<Menu
							activePage={this.checkActivePage("login")}
							redirect={() => goToPage("login")}
						>
							Login
						</Menu>
					</div>
				</div>
			</>
		);
	}
}

export default Navbar;
