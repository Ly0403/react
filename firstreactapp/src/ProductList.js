import React, {Component} from "react";
//export public
// extend inheritance
export default class ProductList extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.info.title}</h2>
                <h3>{this.props.info.content}</h3>
                <h3>{this.props.currentCategory}</h3>
            </div>
        )
    }

}