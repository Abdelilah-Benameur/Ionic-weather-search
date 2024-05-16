import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeteoWidgetPage } from './meteo-widget.page';

const routes: Routes = [
  {
    path: '',
    component: MeteoWidgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeteoWidgetPageRoutingModule {}
