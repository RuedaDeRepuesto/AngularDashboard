import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AccountPage } from './pages/account/account.page';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
    ,
    {
        title:'Home - Golaço Dashboard',
        data:{
            name:'Home'
        },
        path:'home',
        component:HomePage
    },
    {
        title:'My Account - Golaço Dashboard',
        data:{
            name:'Table example'
        },
        path:'account',
        component:AccountPage
    }
];
