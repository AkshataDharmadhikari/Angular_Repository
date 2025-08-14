import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Addproduct } from './components/addproduct/addproduct';
import { Deleteproduct } from './components/deleteproduct/deleteproduct';
import { Products } from './components/products/products';

export const routes: Routes = [


    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:Home},
    {path:"about",component:About},
    {path:"product",component:Products},
    {path:"addproduct",component:Addproduct},
    {path:"deleteproduct",component:Deleteproduct},
];
