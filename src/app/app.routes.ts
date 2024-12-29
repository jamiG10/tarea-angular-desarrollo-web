import { Routes } from '@angular/router';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ApiPageComponent } from './components/api-page/api-page.component';

export const routes: Routes = [
    {
        path:'main',
        component: PrincipalPageComponent
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path:'about',
        component: AboutPageComponent
    },
    {
        path:'api-client',
        component:ApiPageComponent
    }
];
