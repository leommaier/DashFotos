import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashfotoPageComponent } from './dashfoto-page.component';

describe('DashfotoPageComponent', () => {
  let component: DashfotoPageComponent;
  let fixture: ComponentFixture<DashfotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashfotoPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashfotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
