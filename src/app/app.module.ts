import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
