import {Component, OnInit} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {RatesService} from '../service/rates.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {data: [], label: 'Open'},
    {data: [], label: 'High'},
    {data: [], label: 'Low'},
    {data: [], label: 'Close'},
  ] || undefined;
  public lineChartLabels: Label[] = [];

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartPlugins = [];
  jsonArray: any;

  constructor(private ratesService: RatesService) {
  }

  ngOnInit(): void {
    this.ratesService.getChart().subscribe(value => {
      console.log(value);
      this.jsonArray = value.values;
      this.jsonArray.forEach((a: { datetime: Label; }) => {
        this.lineChartLabels.push(a.datetime);
        // @ts-ignore
        this.lineChartData[0]?.data.push(a.open);
        // @ts-ignore
        this.lineChartData[1]?.data.push(a.high);
        // @ts-ignore
        this.lineChartData[2]?.data.push(a.low);
        // @ts-ignore
        this.lineChartData[3]?.data.push(a.close);
      });
    }, error => {
      console.log(error);
    });
  }

}
