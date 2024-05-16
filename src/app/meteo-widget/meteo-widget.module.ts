import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { MeteoWidgetPageRoutingModule } from './meteo-widget-routing.module';

import { MeteoWidgetPage } from './meteo-widget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeteoWidgetPageRoutingModule
  ],
  declarations: [MeteoWidgetPage]
})
export class MeteoWidgetPageModule {}
