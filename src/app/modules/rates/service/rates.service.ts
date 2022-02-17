import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(private http: HttpClient) { }


  getChart(): Observable<any> {
    const httpHeaders = {
      'x-rapidapi-key': 'd73546df4amshd9847ac13c48b63p1a55d1jsne730a130dc5a',
      'x-rapidapi-v': 'twelve-data1.p.rapidapi.com'
    };
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://twelve-data1.p.rapidapi.com/time_series?interval=1day&symbol=AMZN&format=json&outputsize=30', {headers: httpHeaders});
  }
}

