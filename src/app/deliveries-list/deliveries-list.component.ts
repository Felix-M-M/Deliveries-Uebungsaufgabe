import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery.service';
import { DeliveryInterface } from '../interfaces/delivery-interface';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.css']
})
export class DeliveriesListComponent implements OnInit {

  deliveriesData: DeliveryInterface[];

  constructor(private deliveriesService: DeliveryService) { }

  ngOnInit() {
    this.deliveriesData = this.deliveriesService.getData();
  }

  updateList(searchVal: string) {
    this.deliveriesData = this.deliveriesService.getData(searchVal);
    console.log(this.deliveriesData);
  }

}
