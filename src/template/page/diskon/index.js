import React, { Component } from 'react';
import './diskon.css'


class Diskon extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    diskonForm= data => {
        data.preventDefault()
        console.log("data form in diskon : ",data);
        console.log("data name in diskon : ",data.nameProduct);
        console.log("data image in diskon : ",data.thumbnailUrl);
        console.log("data diskon in diskon : ",data.diskon);
    }

    render() {
        const { diskon } = this.props
        console.log("data in diskon : ", diskon);
        return (
            <>
                <div className="content">
                    <form onClick={this.diskonForm}>
                        <div className="title">{diskon.nameProduct}</div>
                        <div className="image">
                            <img
                                src={diskon.thumbnailUrl}
                                alt={diskon.nameProduct}
                            />
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                        <button>Edit</button>
                    </form>
                </div>
            </>
        );
    }
}

export default Diskon;