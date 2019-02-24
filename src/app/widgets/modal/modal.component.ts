import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { BaseWidgetComponent } from '../base-widget.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
  providers: [{ provide: BaseWidgetComponent, useExisting: forwardRef(() => ModalComponent) }]
})
export class ModalComponent implements OnInit {
  @Input() isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  public close(): void {
    this.isOpen = false;
  }

}
