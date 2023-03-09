import Navigation from "./Navigation";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    currentCategory: "",
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    let productList = {
      title: "Products",
      content: "Context For Product Component",
    };
    let categoryList = {
      title: "Categories",
      content: "Content For Category Component",
    };
    let navList = {
      title: "Nav Menu",
      menuItem1: "Menu Item 1",
      menuItem2: "Menu Item 2",
      menuItem3: "Menu Item 3",
    };
    return (
      <div>
        <Container>
          <Row>
            <Navigation info={navList} />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
                info={categoryList}
              />
            </Col>
            <Col xs="9">
              <ProductList info={productList} currentCategory={this.state.currentCategory}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
