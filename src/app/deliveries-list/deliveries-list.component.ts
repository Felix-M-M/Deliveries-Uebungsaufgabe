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
    const data: DeliveryInterface[] = this.deliveriesService.getData();
    console.log(data)
    this.deliveriesData = data;
  }

}
