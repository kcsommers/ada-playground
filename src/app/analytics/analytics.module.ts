import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AnalyticsRoutingModule } from './analytics.routing.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    WidgetsModule,
    SharedModule
  ]
})
export class AnalyticsModule { }
