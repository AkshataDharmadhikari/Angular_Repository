import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  ourServices = ['insurance brokerage', 'risk management', 'reinsurance services', 
    'talent management', 'investment advisory', 'management consulting']
}
