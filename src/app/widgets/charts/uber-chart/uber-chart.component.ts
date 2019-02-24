import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { BaseWidgetComponent } from '../../base-widget.component';

@Component({
  selector: 'app-uber-chart',
  templateUrl: './uber-chart.component.html',
  styleUrls: ['./uber-chart.component.sass'],
  providers: [{ provide: BaseWidgetComponent, useExisting: forwardRef(() => UberChartComponent) }]
})
export class UberChartComponent implements OnInit {
  @Input() showLegend = true;
  @Input() chartType = 'Bar Vertical';
  @Input() chartData: any[];
  @Input() xAxisLabel: string;
  @Input() yAxisLabel: string;
  @Input() showXAxisLabel = true;
  @Input() showYAxisLabel = true;
  @Input() showXAxis = true;
  @Input() showYAxis = true;
  @Input() view: number[] = [0, 0];
  public singleChartTypes: string[] = ['Bar Vertical', 'Pie Chart'];
  public multiChartTypes: string[] = ['Line Chart', 'Area Chart'];

  constructor() {
  }

  ngOnInit() {
  }

  public handleChartTypeChange(type): void {
    this.chartType = type;
  }

}
