import React, { Component } from "react";

class LabaRugi extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listPembelianProduk: [
				{
					id: 1,
					namaProduk: "beras",
					hargaBeli: 3500,
					hargaJual: 5500,
					quantity: 12,
					date: "",
					total: 15000,
				},
				{
					id: 2,
					namaProduk: "Karung",
					hargaBeli: 3500,
					hargaJual: 5500,
					quantity: 14,
					date: "",
					total: 50000,
				},
				{
					id: 3,
					namaProduk: "Eko ",
					hargaBeli: 3500,
					hargaJual: 5500,
					quantity: 14,
					date: "",
					total: 100000,
				},
			],
		};
	}
	getTotalHarga() {
		let totalnew = [];
		this.state.listPembelianProduk.map(({ total }) => {
			if (total) totalnew.push(total);
			return totalnew;
		});
		let total = totalnew.reduce((old, current) => {
			return old + current;
		});
		console.log(
			totalnew.reduce((old, current) => {
				return old + current;
			})
		);
		return total;
	}
	convertRp = (e) => {
		const format = e.toString().split("").reverse().join(""); //diformat ke dalam string
		const convert = format.match(/\d{1,3}/g); //ambil 3 angka
		const rupiah =
			"Rp " + convert.join(".").split("").reverse().join("") + ",00"; //join hasil format dan ambil 3 angka
		return rupiah;
	};
	getDates = () => {
		let today = new Date();
		const dd = String(today.getDate()).padStart(2, "0");
		const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		const yyyy = today.getFullYear();
		const hh = today.getHours();
		const min = today.getMinutes();
		const sec = today.getSeconds();
		today = mm + "/" + dd + "/" + yyyy + "(" + hh + ":" + min + ":" + sec + ")";

		console.log("sdsdsd", today);
		return today;
	};
	renderData = () => {
		return this.state.listPembelianProduk.map((data, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{data.namaProduk}</td>
					<td>{data.hargaBeli}</td>
					<td>{data.hargaJual}</td>
					<td>{data.quantity}</td>
					<td>{data.total}</td>
					<td>{this.getDates()}</td>
				</tr>
			);
		});
	};
	render() {
		return (
			<div className="container-table">
				<br />
				<br />
				<h2 align="center" className="title-table">
					History Pembelian
					{this.getDates}
				</h2>

				<div className="table-work">
					<table className="table-work" align="center">
						<thead className="thead-table">
							<tr className="tr-table">
								<th className="th-table">ID</th>
								<th className="th-table">Nama Barang</th>
								<th className="th-table">Harga Barang Beli</th>
								<th className="th-table">Harga Barang Jual</th>
								<th className="th-table">Quantity</th>
								<th className="th-table">Pembayaran</th>
								<th className="th-table">tanggal pembelian</th>
							</tr>
						</thead>
						<tbody>{this.renderData()}</tbody>
						<tfoot>
							<th id="total" colspan="5">
								Total Penjualan
							</th>
							<td colSpan="2" align="center">
								{this.convertRp(this.getTotalHarga())}
							</td>
						</tfoot>
					</table>
				</div>
			</div>
		);
	}
}

export default LabaRugi;
