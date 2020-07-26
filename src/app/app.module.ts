import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Layout Modules
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';

//Directives
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Sidebar_Directives } from './shared/directives/side-nav.directive';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DataTablesModule } from 'angular-datatables';

// Routing Module
import { AppRoutes } from './app.routing';

// App Component
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { useHash: true }),
        NgbModule.forRoot(),
        FormsModule,
        PerfectScrollbarModule,
        DataTablesModule
    ],
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        AuthenticationLayoutComponent,
        Sidebar_Directives
    ],
    providers: [],
    bootstrap: [AppComponent]
})


export class AppModule { }
