import React, { Component } from 'react';
import './diskon.css'


class Diskon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : props.diskon.id ? props.diskon.id : "",
            nameProduct : props.diskon.nameProduct ? props.diskon.nameProduct : "",
            thumbnailUrl: props.diskon.thumbnailUrl ? props.diskon.thumbnailUrl : "",
            diskon: props.diskon.diskon ? props.diskon.diskon : 0            
        }
    }       

    diskonForm = e => {
        e.preventDefault()        
        // console.log("data id in diskon : ",this.state.id);
        // console.log("data name in diskon : ",this.state.name);
        // console.log("data image in diskon : ",this.state.url);
        // console.log("data diskon in diskon : ",this.state.diskon);

        const data = {
            id : this.state.id,
            nameProduct : this.state.nameProduct,
            thumbnailUrl: this.state.thumbnailUrl,
            diskon: this.state.diskon
        }

        const { updateDiskon } = this.props

        updateDiskon(data)  
              
    }

    setValue = data => {
        this.setState({            
            [data.target.name]: data.target.value
        })
    }

    render() {
        // const { diskon } = this.props
        // console.log("data in diskon : ", diskon);
        console.log("nilai diskon : ", this.state.diskon);
        return (
            <>
                <div className="content">
                    <form onClick={this.diskonForm}>
                        <div className="title">{this.state.nameProduct}</div>
                        <div className="image">
                            <img
                                src={this.state.thumbnailUrl}
                                alt={this.state.nameProduct}
                            />
                        </div>
                        <div>
                            <input name="diskon" type="text" value={this.state.diskon} onChange={this.setValue}/>
                        </div>
                        <button onClick={()=> this.props.redirect("home")}>Edit</button>
                    </form>
                </div>
            </>
        );
    }
}

export default Diskon;