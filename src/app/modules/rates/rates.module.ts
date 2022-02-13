import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RatesRoutingModule} from './rates-routing.module';
import {RatesComponent} from './rates/rates.component';
import {SharedModule} from '../../shared/shared.module';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    RatesComponent
  ],
  imports: [
    CommonModule,
    RatesRoutingModule,
    SharedModule,
    ChartsModule
  ]
})
export class RatesModule {
}
