import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { TablesRoutes } from './tables.routing';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";



//Tables Component
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DataTableComponent } from './data-table/data-table.component';


@NgModule({
    imports: [
        RouterModule.forChild(TablesRoutes),
        DataTablesModule,
        HttpModule,
        HttpClientModule,
        CommonModule
    ],
    declarations: [
        BasicTableComponent,
        DataTableComponent
    ]
})
export class TablesModule { }