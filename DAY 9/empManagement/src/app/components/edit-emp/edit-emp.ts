import { Component } from '@angular/core';
import { Employee, EmpService } from '../../services/emp-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-emp',
  imports: [FormsModule],
  templateUrl: './edit-emp.html',
  styleUrl: './edit-emp.css'
})
export class EditEmp {
  employee!: Employee;
  index!: number;

  constructor(private route: ActivatedRoute, private empService: EmpService, private router: Router) {}

  ngOnInit() {
    this.index = +this.route.snapshot.paramMap.get('id')!;
    this.employee = { ...this.empService.getEmployee(this.index) };
  }

  updateEmployee() {
    this.empService.updateEmployee(this.index, this.employee);
  }
}
