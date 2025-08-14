import { Component } from '@angular/core';
import { EmpService, Employee } from '../../services/emp-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-emp',
  imports: [FormsModule,NgIf],
  templateUrl: './add-emp.html',
  styleUrl: './add-emp.css'
})
export class AddEmp {
   newEmployee: Employee = {
    empNo: 0,
    empName: '',
    empDesignation: '',
    empSalary: 0,
    empPermenant: false
  };
  statusMessage: string = '';
  constructor(private empService: EmpService, private router: Router) {}

  addEmployee() {
    this.empService.addEmployee(this.newEmployee);
    this.statusMessage = 'Employee Added Successfully!';
      setTimeout(() => {
      this.statusMessage = '';  // Clear message after 3 seconds
    }, 3000);
  }
}
