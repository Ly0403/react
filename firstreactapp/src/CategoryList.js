import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

//export public
// extend inheritance
export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Drinks" },
        { categoryId: 2, categoryName: "Foods" },
        { categoryId: 3, categoryName: "Clothes" },
        { categoryId: 4, categoryName: "AAA" },
        { categoryId: 5, categoryName: "BBB" },
        { categoryId: 6, categoryName: "CCC" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          {this.state.categories.map(category=>(
            <ListGroupItem onClick={()=>this.props.changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
        <h3>{this.props.currentCategory}</h3>
      </div>
    );
  }
}
