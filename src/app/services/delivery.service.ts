import { Injectable } from '@angular/core';
import { DeliveryInterface } from '../interfaces/delivery-interface';
import deliveriesJsonData from '../../assets/deliveries-data.json';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  storedDeliveriesData: DeliveryInterface[];

  constructor() {
    this.storedDeliveriesData = [];
    deliveriesJsonData.deliveries.forEach(function(delivery) {
      this.storedDeliveriesData.push(delivery);
    }.bind(this));
  }

  getData(searchVal?: string): DeliveryInterface[] {
    if (!!searchVal) {
      const filteredData = [];
      searchVal = searchVal.toLowerCase();

      this.storedDeliveriesData.forEach((delivery: DeliveryInterface) => {
        if (delivery.carrier.toLowerCase().includes(searchVal) || delivery.receiver.toLowerCase().includes(searchVal)) {
          filteredData.push(delivery);
        }
      });

      return filteredData;
    }

    return this.storedDeliveriesData;
  }
}
