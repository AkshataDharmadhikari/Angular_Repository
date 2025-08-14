import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService, Employee } from '../../services/emp-service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.html',
  styleUrls: ['./delete-emp.css']
})
export class DeleteEmp implements OnInit {
  employee!: Employee;
  index!: number;

  constructor(private route: ActivatedRoute, private empService: EmpService, private router: Router) {}

  ngOnInit() {
  
    this.index = +this.route.snapshot.paramMap.get('id')!;
    
   
    this.employee = this.empService.getEmployee(this.index);
  }

  deleteEmployee() {
    
    this.empService.deleteEmployee(this.index);
    
   
    this.router.navigate(['emplist']);
  }

  cancel() {
    // Navigate back to employee list if user cancels
    this.router.navigate(['emplist']);
  }
}
