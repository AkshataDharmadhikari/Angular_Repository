import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
   
    bankServices =['Bank Accounts', 'Loans', 'credit card', 
    'Debit card', 'investment services', 'net banking']
}
