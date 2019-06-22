import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { LogInComponent} from './myComponent/log-in/log-in.component';
import { HomeComponent} from './myComponent/home/home.component';
import { ForgetPassComponent } from './myComponent/forget-pass/forget-pass.component';
import { ContactComponent } from './myComponent/home/contact/contact.component';
import { ServicesComponent } from './myComponent/home/services/services.component';
import { ClientsComponent } from './myComponent/home/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    ForgetPassComponent,
    ContactComponent,
    ServicesComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
