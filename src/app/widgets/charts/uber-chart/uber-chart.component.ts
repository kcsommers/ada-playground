import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ada-uber-chart',
  templateUrl: './uber-chart.component.html',
  styleUrls: ['./uber-chart.component.sass']
})
export class UberChartComponent implements OnInit {
  @Input() showLegend = false;
  @Input() chartType = 'Bar Vertical';
  @Input() chartData: any[];
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
