import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeliveriesListComponent } from './deliveries-list/deliveries-list.component';
import { DeliveryService } from './services/delivery.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeliveriesListComponent,
    SearchBarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
