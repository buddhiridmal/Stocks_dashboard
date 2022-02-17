import {Component, OnInit} from '@angular/core';
import {MarketService} from '../service/market.service';
import {Coins} from '../../../core/model/market/coins';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
   allCoins: Array<Coins> = [];

  constructor(private marketService: MarketService) {
  }

  ngOnInit(): void {
    this.marketService.getCoins().subscribe(res => {
      console.log(res);
      res.data.forEach((val: { screen_data: { pairs_data: any; }; })=>{
        this.allCoins  = val.screen_data.pairs_data
      })
      console.log(this.allCoins);
    }, error => {
      console.log(error);
    });
  }

}
