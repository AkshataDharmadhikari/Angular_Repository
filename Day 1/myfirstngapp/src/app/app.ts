import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myfirstngapp');
  firstName = "Akshata";
  lastName = "Dharmadhikari"
  age = 22
  gender = "Female"
  email = 'dharmadhikariakshata@gmail.com'

  hobbies = ['Coding', 'Reading', 'Dancing', 'Travelling']


  newHobby: string = '';

  greetUser() {
    alert(`Hello, ${this.firstName}!`);
  }

  addHobby() {
    if (this.newHobby.trim()) {
      this.hobbies.push(this.newHobby.trim());
      this.newHobby = '';
    }
  }


  
}
