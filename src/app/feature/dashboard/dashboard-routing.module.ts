import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: '', loadChildren: () => import('../../modules/market/market.module').then(m => m.MarketModule)},
      {path: 'RatesComponent', loadChildren: () => import('../../modules/rates/rates.module').then(m => m.RatesModule)}

    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
