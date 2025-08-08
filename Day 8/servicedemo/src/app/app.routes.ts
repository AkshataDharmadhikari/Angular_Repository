import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';

export const routes: Routes = [

    {path:'', redirectTo:'Home', pathMatch:'full'},
    {path:'home', component:Home},
    {path:'about', component:About},
    {path:'contact', component:Contact}
];
