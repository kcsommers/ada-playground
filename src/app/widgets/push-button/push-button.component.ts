import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { BaseWidgetComponent } from '../base-widget.component';

@Component({
  selector: 'app-push-button',
  templateUrl: './push-button.component.html',
  styleUrls: ['./push-button.component.sass'],
  providers: [{ provide: BaseWidgetComponent, useExisting: forwardRef(() => PushButtonComponent) }]
})
export class PushButtonComponent extends BaseWidgetComponent implements OnInit {
  @Input() text: string;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
