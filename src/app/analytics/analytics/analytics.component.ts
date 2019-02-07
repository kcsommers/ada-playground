import { Component, OnInit } from '@angular/core';
import { singleData, multiData } from '../../widgets/charts/chart-data';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.sass']
})
export class AnalyticsComponent implements OnInit {
  public singleData: any[] = singleData;
  public multiData: any[] = multiData;

  constructor() { }

  ngOnInit() {
  }

}
