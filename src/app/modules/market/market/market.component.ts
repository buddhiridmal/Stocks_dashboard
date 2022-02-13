import {Component, OnInit} from '@angular/core';
import {MarketService} from '../service/market.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  jsonArray: any;

  constructor(private marketService: MarketService) {
  }

  ngOnInit(): void {
    this.marketService.getChart().subscribe(value => {
      console.log(value);
      this.jsonArray = value;
    }, error => {
      console.log(error);
    });
  }

}
