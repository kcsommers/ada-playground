import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTemplateMarker]'
})
export class TemplateMarkerDirective {
  @Input('appTemplateMarker') widgetType: string;

  constructor(
    public template: TemplateRef<any>,
  ) { }
}
