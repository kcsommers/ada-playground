import { Component, OnInit } from '@angular/core';
import { singleData } from '../../charts/chart-data';

@Component({
  selector: 'chart-data-json-customizer',
  templateUrl: './chart-data-json.customizer.html',
  styleUrls: ['./chart-data-json.customizer.sass']
})
export class ChartDataJsonCustomizerComponent implements OnInit {
  public dataType = 'Single';
  public chartDataJson = JSON.stringify(singleData);
  public showJson = false;
  public dataName: string;
  public dataValue: string;

  constructor() {
  }

  ngOnInit() {
  }

  public addData(): void {
    const chartDataParsed = JSON.parse(this.chartDataJson);
    chartDataParsed.push({ name: this.dataName, value: this.dataValue });
  }

}
