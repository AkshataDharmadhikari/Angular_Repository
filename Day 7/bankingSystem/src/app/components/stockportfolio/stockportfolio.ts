import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stockportfolio',
  imports: [NgFor],
  templateUrl: './stockportfolio.html',
  styleUrl: './stockportfolio.css'
})
export class Stockportfolio {

 stockdata = [
  {
    stockId: 'APPLE',
    quantity: 10,
    purchasePrice: 150,
    currentPrice: 170,
    invested: 1500,
    currentValue: 1700,
    status: 'Profit'
  },
  {
    stockId: 'GOOGLE',
    quantity: 5,
    purchasePrice: 1200,
    currentPrice: 1100,
    invested: 6000,
    currentValue: 5500,
    status: 'Loss'
  },
  {
    stockId: 'TESLA',
    quantity: 8,
    purchasePrice: 700,
    currentPrice: 750,
    invested: 5600,
    currentValue: 6000,
    status: 'Profit'
  },
  {
    stockId: 'MICROSOFT',
    quantity: 12,
    purchasePrice: 280,
    currentPrice: 260,
    invested: 3360,
    currentValue: 3120,
    status: 'Loss'
  },
  {
    stockId: 'NETFLIX',
    quantity: 6,
    purchasePrice: 500,
    currentPrice: 550,
    invested: 3000,
    currentValue: 3300,
    status: 'Profit'
  },
  {
    stockId: 'AMAZON',
    quantity: 4,
    purchasePrice: 3200,
    currentPrice: 3100,
    invested: 12800,
    currentValue: 12400,
    status: 'Loss'
  },
  {
    stockId: 'NIVIDA',
    quantity: 15,
    purchasePrice: 400,
    currentPrice: 450,
    invested: 6000,
    currentValue: 6750,
    status: 'Profit'
  },
  {
    stockId: 'META',
    quantity: 9,
    purchasePrice: 330,
    currentPrice: 310,
    invested: 2970,
    currentValue: 2790,
    status: 'Loss'
  },
  {
    stockId: 'BABA',
    quantity: 7,
    purchasePrice: 200,
    currentPrice: 220,
    invested: 1400,
    currentValue: 1540,
    status: 'Profit'
  },
  {
    stockId: 'INTC',
    quantity: 20,
    purchasePrice: 35,
    currentPrice: 30,
    invested: 700,
    currentValue: 600,
    status: 'Loss'
  }
]

totalInvested: number = 0;
portfolioValue: number = 0;
overallStatus: string = '';

  ngOnInit() {
    this.totalInvested = this.stockdata.reduce((sum, stock) => sum + stock.invested, 0);
    this.portfolioValue = this.stockdata.reduce((sum, stock) => sum + stock.currentValue, 0);
    this.overallStatus = this.portfolioValue > this.totalInvested ? 'Profit' : 'Loss';
  }

}
