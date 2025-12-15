import { Routes } from '@angular/router';
import { Card } from './card/card';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Singlelistview } from './singlelistview/singlelistview';

export const routes: Routes = [
    {path:'card',component:Card},
    {path:'home',component:Home},
    {path:'singlelistview/:titileid',component:Singlelistview}
];