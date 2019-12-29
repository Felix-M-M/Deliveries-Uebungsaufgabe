import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeliveriesListComponent } from './deliveries-list/deliveries-list.component';
import { DeliveryService } from './services/delivery.service';

@NgModule({
  declarations: [
    AppComponent,
    DeliveriesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
