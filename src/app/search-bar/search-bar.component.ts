import { Component, OnInit } from '@angular/core';
import { DeliveriesListComponent } from '../deliveries-list/deliveries-list.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [DeliveriesListComponent]
})
export class SearchBarComponent implements OnInit {

  constructor(private comp: DeliveriesListComponent) { }

  ngOnInit() {
  }

  public onClickMe(val: string) {
    this.comp.updateList(val);
  }

}
