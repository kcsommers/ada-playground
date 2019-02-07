import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ada-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
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
