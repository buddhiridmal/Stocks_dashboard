import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private http: HttpClient) {
  }

  getChart(): Observable<any> {
    const httpHeaders = {
      'x-rapidapi-key': 'd73546df4amshd9847ac13c48b63p1a55d1jsne730a130dc5a',
      'x-rapidapi-v': 'yh-finance.p.rapidapi.com'
    };
    return this.http.get('https://yh-finance.p.rapidapi.com/market/v2/get-summary', {headers: httpHeaders});
  }

  getCoins(): Observable<any> {
     const httpHeaders = {
      'x-rapidapi-key': 'd73546df4amshd9847ac13c48b63p1a55d1jsne730a130dc5a',
      'x-rapidapi-host': 'investing-cryptocurrency-markets.p.rapidapi.com',
    };
    return this.http.get('https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list-pairs?time_utc_offset=28800&lang_ID=1', {headers: httpHeaders});
  }
}
