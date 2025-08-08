import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dataInAngular');

  appName = "Introduction to data in angular";
  typeofdata = ['data type','data array','Json object','Array of json']
  productDetails = {pId : 101, pName:'pepsi', pPrice:'100', pOty: '2', pCategory:'SoftDrink'}

  productList = [
    { pId: 101, pName: 'Pepsi', pPrice: 100, pQty: 2, pCategory: 'Soft Drink' },
    { pId: 102, pName: 'iPhone 14', pPrice: 90000, pQty: 1, pCategory: 'Electronics' },
    { pId: 103, pName: 'Nike Shoes', pPrice: 7200, pQty: 1, pCategory: 'Footwear' },
    { pId: 104, pName: 'Dell Laptop', pPrice: 85000, pQty: 1, pCategory: 'Electronics' },
    { pId: 105, pName: 'T-shirt', pPrice: 2500, pQty: 3, pCategory: 'Apparel' },
    { pId: 106, pName: 'Coffee Mug', pPrice: 150, pQty: 2, pCategory: 'Kitchenware' },
    { pId: 107, pName: 'Samsung TV', pPrice: 6000, pQty: 1, pCategory: 'Electronics' },
    { pId: 108, pName: 'Backpack', pPrice: 4500, pQty: 1, pCategory: 'Accessories' },
    { pId: 109, pName: 'Book - Angular Basics', pPrice: 300, pQty: 2, pCategory: 'Books' },
    { pId: 110, pName: 'Bluetooth Speaker', pPrice: 6075, pQty: 1, pCategory: 'Electronics' }
  ];

}
