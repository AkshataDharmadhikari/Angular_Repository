import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { EmpList } from './components/emp-list/emp-list';
import { AddEmp } from './components/add-emp/add-emp';
import { EditEmp } from './components/edit-emp/edit-emp';
import { DeleteEmp } from './components/delete-emp/delete-emp';
import { Empculture } from './components/empculture/empculture';
import { CurrentOpening } from './components/current-opening/current-opening';

export const routes: Routes = [

    {path:"",redirectTo:"Home",pathMatch:"full"},
    {path:"home",component:Home},
    {path:"emplist",component:EmpList},
    {path: 'edit/:id', component: EditEmp },
    {path: 'delete/:id', component: DeleteEmp },
    {path:"addemp",component:AddEmp},
    {path:"editemp",component:EditEmp},
    {path:"deletemp",component:DeleteEmp},
    {path:"empculture",component:Empculture},
    {path:"currentopen",component:CurrentOpening}


];
