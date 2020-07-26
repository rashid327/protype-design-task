import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Tables Components
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DataTableComponent } from './data-table/data-table.component';

export const TablesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'basic-table',
                component: BasicTableComponent,
                data: {
                    title: 'Basic Table'
                }
            },
            {
                path: 'data-table',
                component: DataTableComponent,
                data: {
                    title: 'Data Table'
                }
            }
        ]
    }
];

