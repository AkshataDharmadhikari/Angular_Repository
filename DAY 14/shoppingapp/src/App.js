import React, { Component } from "react";
import MaleProducts from "./MaleProducts";
import FemaleProducts from "./FemaleProducts";
import KidsProducts from "./KidsProducts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        { pId: 1, pName: "Men's T-Shirt", pCategory: "male", pPrice: 25, pIsInStock: true },
        { pId: 2, pName: "Women's Dress", pCategory: "female", pPrice: 45, pIsInStock: true },
        { pId: 3, pName: "Kids' Shorts", pCategory: "kids", pPrice: 15, pIsInStock: false },
        { pId: 4, pName: "Men's Jeans", pCategory: "male", pPrice: 40, pIsInStock: true },
        { pId: 5, pName: "Women's Handbag", pCategory: "female", pPrice: 60, pIsInStock: true },
        { pId: 6, pName: "Kids' Toy", pCategory: "kids", pPrice: 20, pIsInStock: true },
        { pId: 7, pName: "Men's Shoes", pCategory: "male", pPrice: 70, pIsInStock: false },
        { pId: 8, pName: "Women's Scarf", pCategory: "female", pPrice: 30, pIsInStock: true },
        { pId: 9, pName: "Kids' Jacket", pCategory: "kids", pPrice: 35, pIsInStock: true },
        { pId: 10, pName: "Men's Watch", pCategory: "male", pPrice: 90, pIsInStock: true },
        { pId: 11, pName: "Women's Shoes", pCategory: "female", pPrice: 80, pIsInStock: false },
        { pId: 12, pName: "Kids' Cap", pCategory: "kids", pPrice: 10, pIsInStock: true }
      ]
    };
  }

  render() {
    const { productList } = this.state;

    const maleProducts = productList.filter(p => p.pCategory === "male");
    const femaleProducts = productList.filter(p => p.pCategory === "female");
    const kidsProducts = productList.filter(p => p.pCategory === "kids");

    return (
      <div>
        <h1>🛍️ Welcome to ShoppingApp</h1>
        <MaleProducts products={maleProducts} />
        <FemaleProducts products={femaleProducts} />
        <KidsProducts products={kidsProducts} />
      </div>
    );
  }
}

export default App;