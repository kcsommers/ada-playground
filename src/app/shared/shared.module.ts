import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMarkerDirective } from '../directives/template-marker.directive';

@NgModule({
  declarations: [
    TemplateMarkerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateMarkerDirective
  ]
})
export class SharedModule { }
