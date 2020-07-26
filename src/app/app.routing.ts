import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'tables/data-table',
        pathMatch: 'full',
    },
    {
        path: '',
        component: CommonLayoutComponent,
        children: [
            
            {
                path: 'tables',
                loadChildren: './tables/tables.modules#TablesModule'
            },
          
           
        ]
    },
    {
        path: '',
        component: AuthenticationLayoutComponent,
        children: [
            {
                path: 'authentication',
                loadChildren: './extras/authentication.modules#AuthenticationModule'
            }
        ]
    }
];

