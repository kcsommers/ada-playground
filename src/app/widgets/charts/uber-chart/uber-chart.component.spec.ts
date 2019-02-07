import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UberChartComponent } from './uber-chart.component';

describe('UberChartComponent', () => {
  let component: UberChartComponent;
  let fixture: ComponentFixture<UberChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UberChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UberChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
