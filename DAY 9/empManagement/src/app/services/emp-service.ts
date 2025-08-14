// emp.service.ts
import { Injectable } from '@angular/core';

export interface Employee {
  empNo: number;
  empName: string;
  empDesignation: string;
  empSalary: number;
  empPermenant: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  emplist: Employee[] = [
    {
      empNo: 101,
      empName: "Alice Johnson",
      empDesignation: "Software Engineer",
      empSalary: 75000,
      empPermenant: true
    },
    {
      empNo: 102,
      empName: "Bob Smith",
      empDesignation: "Project Manager",
      empSalary: 90000,
      empPermenant: true
    },
    {
      empNo: 103,
      empName: "Charlie Davis",
      empDesignation: "QA Analyst",
      empSalary: 65000,
      empPermenant: false
    },
    {
      empNo: 104,
      empName: "Dana Lee",
      empDesignation: "UI/UX Designer",
      empSalary: 70000,
      empPermenant: true
    },
    {
      empNo: 105,
      empName: "Ethan Brown",
      empDesignation: "DevOps Engineer",
      empSalary: 80000,
      empPermenant: false
    }
  ];

  getEmployees() {
    return this.emplist;
  }

  addEmployee(employee: Employee) {
    this.emplist.push(employee);
  }

  updateEmployee(index: number, updatedEmployee: Employee) {
    this.emplist[index] = updatedEmployee;
  }

  deleteEmployee(index: number) {
    this.emplist.splice(index, 1);
  }

  getEmployee(index: number): Employee {
    return this.emplist[index];
  }
}
