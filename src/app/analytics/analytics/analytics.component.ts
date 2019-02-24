import { Component, OnInit } from '@angular/core';
import { singleData, multiData } from '../../widgets/charts/chart-data';
import { TableRow } from 'src/app/widgets/table/table';
import { ComponentRef } from '@angular/core/src/render3';
import { TextComponent, PushButtonComponent, UberChartComponent } from 'src/app/widgets/public_api';

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

  handleTableButtonClick(e: MouseEvent, context: any) {
    console.log(context);
  }

  // Custom function for looping through component instances and populating their
  // properties with tableRow data
  handleRowExpanded(event: { tableRow: TableRow, components: ComponentRef<any>[] }) {
    const { tableRow, components } = event;
    console.log('ROW EXPANDED EVENT: ', event);
    components.forEach((cmp) => {
      switch (cmp.componentType) {
        case TextComponent:
          cmp.instance.content = tableRow.email;
          break;
        case PushButtonComponent:
          cmp.instance.text = tableRow.name;
          cmp.location.nativeElement.addEventListener('click', (e: MouseEvent) => { this.rowButtonClick(e, tableRow) });
          break;
        case UberChartComponent:
          const chartData = this.createChartData(tableRow);
          cmp.instance.chartType = 'Area Chart'
          cmp.instance.xAxisLabel = 'Dates'
          cmp.instance.yAxisLabel = 'Salary'
          cmp.instance.chartData = chartData;
      }
    });
  }

  private createChartData(data: TableRow): { name: string, series: { name, value }[] }[] {
    return [{
      name: data.name,
      series: [
        {
          name: data.startDate,
          value: data.startSalary
        },
        {
          name: data.endDate,
          value: data.endSalary
        }
      ]
    }]
  }

  private rowButtonClick(event: MouseEvent, tableRow: TableRow): void {
    event.stopPropagation();
    console.log('ROW BUTTON CLICKED: ', tableRow.name);
  }

}
