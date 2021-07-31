import React, { Component } from 'react';

class Penjualan extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newListProduct : []
         }
    }

    componentDidMount = () => {
        const { listProduct } = this.props

        this.setState({
            newListProduct : listProduct
        })
    }

    setValue = data => {
        this.setState({
            [data.target.name] : data.target.value
        })
    }

    renderTable = () => {
        this.state.map((product, index) => {
            return (
                <>
                    <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.name}</td>
                        <td>{product.name}</td>
                        <td>{product.name}</td>
                    </tr>
                </>
            )
        })
    }

    render() { 
        return ( 
            <div>
                <h2 align="center">Table Penjualan</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama Barang</th>
                            <th>Quantity</th>
                            <th>Harga Barang</th>
                            <th>Total Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Telur</td>
                            <td>3</td>
                            <td>1500</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Penjualan;