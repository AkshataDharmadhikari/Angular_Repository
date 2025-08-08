import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { ContactUs } from './components/contact-us/contact-us';
import { Stockportfolio } from './components/stockportfolio/stockportfolio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,ContactUs,Stockportfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bankingSystem');
}
