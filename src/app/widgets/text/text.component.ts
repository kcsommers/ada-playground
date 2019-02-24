import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { BaseWidgetComponent } from '../base-widget.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass'],
  providers: [{ provide: BaseWidgetComponent, useExisting: forwardRef(() => TextComponent) }]
})
export class TextComponent extends BaseWidgetComponent implements OnInit {
  @Input() content: string;

  constructor() { super() }

  ngOnInit() {
  }

}
