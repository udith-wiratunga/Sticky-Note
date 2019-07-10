import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthService } from './auth.service';
import { LoginComponent } from './components/user/login/login.component';
import { EmailComponent } from './components/user/email/email.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { MembersComponent } from './components/user/members/members.component';

import { StickyListComponent } from './sticky-list/sticky-list.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthService] },
    { path: 'list', component: StickyListComponent, canActivate: [AuthService] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);