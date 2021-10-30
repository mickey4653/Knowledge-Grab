import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InstructorComponent } from './instructor/instructor.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'instructor', component:InstructorComponent},
{path:'login', component: LoginComponent},
{path:'signup', component: SignupComponent},
{ path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,InstructorComponent,LoginComponent,SignupComponent,PageNotFoundComponent];