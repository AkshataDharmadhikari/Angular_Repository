import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [NgFor],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs {
    contactist = [
      {officeName: 'powai', contactNo : 80768567, email:'icicibank@gmail.com'},
      {officeName: 'pune', contactNo : 80768567, email:'icicibank@gmail.com'},
      {officeName: 'cyberhub', contactNo : 80768567, email:'icicibank@gmail.com'},
      {officeName: 'newjersey', contactNo : 80768567, email:'icicibank@gmail.com'},
      {officeName: 'paris', contactNo : 80768567, email:'icicibank@gmail.com'}
    ]
}
