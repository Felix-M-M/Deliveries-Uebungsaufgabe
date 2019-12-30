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
  searchValue: string;

  constructor(private deliveriesService: DeliveryService) { }

  ngOnInit() {
    this.onClearClick();
  }

  onSearchClick() {
    this.deliveriesData = this.deliveriesService.getData(this.searchValue);
  }

  onClearClick() {
    this.searchValue = '';
    this.deliveriesData = this.deliveriesService.getData();
  }

}
