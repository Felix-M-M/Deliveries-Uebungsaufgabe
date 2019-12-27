import { Injectable, OnInit } from '@angular/core';
import { DeliveryInterface } from '../interfaces/delivery-interface';
import deliveriesJsonData from '../../assets/deliveries-data.json';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  storedDeliveriesData: DeliveryInterface[];

  constructor() { 
    this.storedDeliveriesData = [];
    deliveriesJsonData.deliveries.forEach(function(delivery){
      console.log(delivery);
      this.storedDeliveriesData.push(delivery);
    }.bind(this));
  }

  getData(searchVal?: string): DeliveryInterface[] {
    return this.storedDeliveriesData;
  }
}
