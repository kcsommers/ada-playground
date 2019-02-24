import { Injectable } from '@angular/core';
import * as AllWidgets from '../widgets/public_api';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() { }

  public getWidgetType(selector: string): any {
    switch (selector) {
      case 'app-uber-chart':
        return AllWidgets.UberChartComponent;
      case 'app-push-button':
        return AllWidgets.PushButtonComponent
      case 'app-modal':
        return AllWidgets.ModalComponent
      case 'app-text':
        return AllWidgets.TextComponent
      default:
        return 'Unkown Selector'
    }
  }
}
