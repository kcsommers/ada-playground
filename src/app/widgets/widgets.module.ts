import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UberChartComponent } from './charts/uber-chart/uber-chart.component';
import { ChartDataJsonCustomizerComponent } from './customizers/chart-data-json/chart-data-json.customizer';
import { ModalComponent } from './modal/modal.component';
import { ClarityModule } from "@clr/angular";
import { FormsModule } from '@angular/forms';

const components = [
  UberChartComponent,
  ChartDataJsonCustomizerComponent,
  ModalComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule
  ],
  exports: [...components]
})
export class WidgetsModule { }
