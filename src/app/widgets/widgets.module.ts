import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UberChartComponent } from './charts/uber-chart/uber-chart.component';
import { ChartDataJsonCustomizerComponent } from './customizers/chart-data-json/chart-data-json.customizer';
import { ModalComponent } from './modal/modal.component';
import { ClarityModule } from "@clr/angular";
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { PushButtonComponent } from './push-button/push-button.component';
import { TextComponent } from './text/text.component';

const components = [
  UberChartComponent,
  ChartDataJsonCustomizerComponent,
  ModalComponent,
  TableComponent,
  PushButtonComponent,
  TextComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    SharedModule
  ],
  exports: [...components],
  entryComponents: [components]
})
export class WidgetsModule { }
