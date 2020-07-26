import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AuthenticationRoutes } from './authentication.routing';

//Authentication Component
import { SignInComponent } from './sign-in/sign-in.component';
import { SignIn2Component } from './sign-in2/sign-in2.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Page500Component } from './500/500.component';
import { Page404Component } from './404/404.component';

@NgModule({
    imports: [
        RouterModule.forChild(AuthenticationRoutes),
    ],
    declarations: [
        SignInComponent,
        SignIn2Component,
        SignUpComponent,
        Page500Component,
        Page404Component
    ]
})
export class AuthenticationModule { }