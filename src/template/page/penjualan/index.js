import React, { Component } from 'react';

class Penjualan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Nama Barang</td>
                            <td>Quantity</td>
                            <td>Harga Barang</td>
                            <td>Total Harga</td>
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