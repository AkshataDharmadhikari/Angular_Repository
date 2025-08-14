import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmpService,Employee } from '../../services/emp-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  imports: [NgFor,RouterLink],
  templateUrl: './emp-list.html',
  styleUrl: './emp-list.css'
})
export class EmpList  implements OnInit {

     // emplist.component.ts
  employees: Employee[] = [];

  constructor(private empService: EmpService) {}

  ngOnInit() {
    this.employees = this.empService.getEmployees();
  }
}


    
  