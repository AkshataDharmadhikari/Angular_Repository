import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Careers } from './components/careers/careers';
import { History } from './components/history/history';
import { Contact } from './components/contact/contact';
import { North } from './components/contact/locations/north/north';
import { West } from './components/contact/locations/west/west';
import { East } from './components/contact/locations/east/east';
import { South } from './components/contact/locations/south/south';

export const routes: Routes = [

    {path : '', redirectTo :'Home',pathMatch:'full'},
    {path : 'home',component : Home},
    {path : 'about', component : About},
    {path : 'career', component : Careers},
    {path : 'history', component : History},
    {path : 'contact', component : Contact, children : 
    [
        { path : 'east', component : North},
        { path : 'west', component : South},
        { path : 'north', component : East},
        { path : 'south', component : West}
    ]}
  
];
