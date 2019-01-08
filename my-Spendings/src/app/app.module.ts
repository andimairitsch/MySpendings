import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookingsComponent } from './bookings/bookings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { FinanzComponent } from './finanz/finanz.component';
import { MainComponent } from './main/main.component';
import { BookingService } from './booking.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { KategorieService } from './kategorie.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookingsComponent,
    StatisticsComponent,
    SettingsComponent,
    FinanzComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookingService, KategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
