import { Component, OnInit, AfterContentInit, AfterViewInit, AfterViewChecked, ContentChildren, QueryList, ViewChild, ViewChildren, ElementRef, forwardRef, ViewContainerRef, ComponentFactoryResolver, Type, ComponentRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { TableRow } from './table'
import { TemplateMarkerDirective } from '../../directives/template-marker.directive';
import { BaseWidgetComponent } from '../base-widget.component';
import * as AllWidgets from '../public_api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
  providers: [{ provide: BaseWidgetComponent, useExisting: forwardRef(() => TableComponent) }]
})
export class TableComponent extends BaseWidgetComponent implements OnInit, AfterContentInit, AfterViewInit {
  public rows: TableRow[] = [
    new TableRow('Kacy Sommers', 'kacysommers@gmail.com', 'Nov 26th 2017', 'Nov 27th 2018', 40000, 50000),
    new TableRow('Savanna Shai', 'savannashai@gmail.com', 'Dec 5 2015', 'Sept 16 2018', 60000, 20000),
    new TableRow('Joni Blue', 'joniblue@gmail.com', 'Aug 3 2011', 'Oct 15 2017', 30000, 70000)
  ];
  public schema: string[] = Object.keys(this.rows[0]);
  public selectedRowIndexes: number[] = [];

  // stores all the newly created components
  private componentRefs: ComponentRef<any>[][] = [];

  @ContentChildren(TemplateMarkerDirective) expandableRowItems: QueryList<TemplateMarkerDirective>;
  @ViewChildren('viewContainer', { read: ViewContainerRef }) viewContainers: QueryList<ViewContainerRef>;
  @Output() rowExpanded: EventEmitter<{ tableRow: TableRow, components: ComponentRef<any>[] }> = new EventEmitter<{ tableRow: TableRow, components: ComponentRef<any>[] }>();

  // emits the tableRow and created components that correspond with the index
  public rowSelected(index: number): void {
    if (this.selectedRowIndexes.includes(index)) {
      this.selectedRowIndexes.splice(this.selectedRowIndexes.indexOf(index), 1);
    } else {
      this.selectedRowIndexes.push(index);
      const tableRow = this.rows[index];
      const components = this.componentRefs[index];
      this.rowExpanded.emit({ tableRow, components });
    }
  }

  // Creates new instance of each component in expandableRowItems query
  // for every row's viewContainer, then stores them in componentRefs array
  public createComponents(): void {
    const viewContainersArr = this.viewContainers.toArray();
    viewContainersArr.forEach((container) => {
      const componentRefArr: ComponentRef<any>[] = [];
      this.expandableRowItems.forEach((item) => {
        const componentRef: ComponentRef<any> = container.createComponent(this.resolver.resolveComponentFactory(AllWidgets[item.widgetType]));
        componentRefArr.push(componentRef);
        componentRef.changeDetectorRef.detectChanges();
      });
      this.componentRefs.push(componentRefArr);
    });
  }

  constructor(private resolver: ComponentFactoryResolver) {
    super()
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
    this.createComponents();
  }
}
