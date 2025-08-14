import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  imports: [FormsModule],
  templateUrl: './calculate.html',
  styleUrl: './calculate.css'
})
export class Calculate {
    firstnum = 0;
    secnum = 0;
    add = 0;
    sub = 0 ;
    mul = 0;
    div = 0;
    result = 0;

    calculate()
    {
       this.add = this.firstnum + this.secnum;
       this.sub = this.firstnum - this.secnum;
       this.mul = this.firstnum * this.secnum;
       this.div = this.firstnum / this.secnum;
    
    }
}
