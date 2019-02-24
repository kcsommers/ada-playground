import { OnInit, Input } from '@angular/core'

export class BaseWidgetComponent implements OnInit {
  @Input() dataContext: any;

  ngOnInit() {
  }
}