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
        }, () => console.log("list product in penjualan", this.state.newListProduct))

        
    }

    setValue = data => {
        this.setState({
            [data.target.name] : data.target.value
        })
    }

    renderTable = () => {
        // const { listProduct } = this.props
        
        const listData = this.state.newListProduct

        console.log("list in penjualan", listData);

        // return listData.map((product, index) => {
        //     return (
        //         <>
        //             <tr key={index}>
        //                 <td>{product.id}</td>
        //                 <td>{product.nameProduct}</td>
        //                 <td>{product.qty}</td>
        //                 <td>{product.hargaJual}</td>
        //                 <td></td>
        //             </tr>
        //         </>
        //     )
        // })
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
                        {this.renderTable()}
                        {/* <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>                     */}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Penjualan;