import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeteoWidgetPage } from './meteo-widget.page';

describe('MeteoWidgetPage', () => {
  let component: MeteoWidgetPage;
  let fixture: ComponentFixture<MeteoWidgetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeteoWidgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
