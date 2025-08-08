import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-south',
  imports: [NgFor],
  templateUrl: './south.html',
  styleUrl: './south.css'
})
export class South {
    offices = [
    { city: 'New York', call: '+1-212-555-1234', email: 'ny.office@example.com' },
    { city: 'Mumbai', call: '+44-20-7946-0958', email: 'london.office@example.com' },
    { city: 'pune', call: '+81-3-1234-5678', email: 'tokyo.office@example.com' },
    { city: 'Nagpur', call: '+61-2-9876-5432', email: 'sydney.office@example.com' },
    { city: 'Berlin', call: '+49-30-123456', email: 'berlin.office@example.com' },
    { city: 'Toronto', call: '+1-416-555-7890', email: 'toronto.office@example.com' }
  ];

}
