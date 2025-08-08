import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';

import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { GreetingsPipe } from './pipess/greetings-pipe';
import { GendergreetingsPipe } from './pipess/gendergreetings-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,UpperCasePipe,LowerCasePipe,CurrencyPipe,JsonPipe,DatePipe,GreetingsPipe,GendergreetingsPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipedemo');
  firstName = 'Akshata';
  lastName = 'Dharmadhikari';
  salary = 1000;
  gender = 'Female'
  product = {pId :101,pName:'laptop',price:20000,pIsInStock:true}
  orderdate = new Date(); 
 
  employeeList = [
  { empNo: 1001, empName: 'Alice Johnson', empDesignation: 'Software Engineer', empGender: 'Female', empSal: 75000, empIspermenant: true },
  { empNo: 1002, empName: 'Bob Smith', empDesignation: 'QA Analyst', empGender: 'Male', empSal: 65000, empIspermenant: false },
  { empNo: 1003, empName: 'Carla Gomez', empDesignation: 'Project Manager', empGender: 'Female', empSal: 90000, empIspermenant: true },
  { empNo: 1004, empName: 'Daniel Lee', empDesignation: 'DevOps Engineer', empGender: 'Male', empSal: 80000, empIspermenant: true },
  { empNo: 1005, empName: 'Eva Patel', empDesignation: 'UI/UX Designer', empGender: 'Female', empSal: 70000, empIspermenant: false },
  { empNo: 1006, empName: 'Frank Lin', empDesignation: 'Business Analyst', empGender: 'Male', empSal: 72000, empIspermenant: true },
  { empNo: 1007, empName: 'Grace O’Connor', empDesignation: 'HR Manager', empGender: 'Female', empSal: 68000, empIspermenant: true },
  { empNo: 1008, empName: 'Henry Brooks', empDesignation: 'IT Support', empGender: 'Male', empSal: 55000, empIspermenant: false },
  { empNo: 1009, empName: 'Ivy Chen', empDesignation: 'Data Scientist', empGender: 'Female', empSal: 88000, empIspermenant: true },
  { empNo: 1010, empName: 'Jack Miller', empDesignation: 'Network Engineer', empGender: 'Male', empSal: 76000, empIspermenant: false }
];

}