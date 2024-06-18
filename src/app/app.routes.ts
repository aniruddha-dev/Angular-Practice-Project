import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'account'
    },
    {
        path: 'account',
        loadChildren: () => import('./feature/account/account.module').then((m) => m.AccountModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'account'
    }
];
