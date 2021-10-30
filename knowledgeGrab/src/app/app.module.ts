import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { InstructorComponent } from './instructor/instructor.component';
// import { SignupComponent } from './signup/signup.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
