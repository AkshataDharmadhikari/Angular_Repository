import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-west',
  imports: [NgFor],
  templateUrl: './west.html',
  styleUrl: './west.css'
})
export class West {
    offices = [
    { city: 'New York', call: '+1-212-555-1234', email: 'ny.office@example.com' },
    { city: 'London', call: '+44-20-7946-0958', email: 'london.office@example.com' },
    { city: 'Tokyo', call: '+81-3-1234-5678', email: 'tokyo.office@example.com' },
    { city: 'Sydney', call: '+61-2-9876-5432', email: 'sydney.office@example.com' },
    { city: 'Berlin', call: '+49-30-123456', email: 'berlin.office@example.com' },
    { city: 'Toronto', call: '+1-416-555-7890', email: 'toronto.office@example.com' }
  ];

}
