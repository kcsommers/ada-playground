import { Directive, TemplateRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTemplateMarker]'
})
export class TemplateMarkerDirective {
  @Input('appTemplateMarker') widgetSelector: string;

  constructor(
    public template: TemplateRef<any>
  ) {

  }

  @HostListener('load') onload() {
  }
}
