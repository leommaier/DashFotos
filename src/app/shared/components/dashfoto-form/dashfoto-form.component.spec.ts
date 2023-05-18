import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashfotoFormComponent } from './dashfoto-form.component';

describe('DashfotoFormComponent', () => {
  let component: DashfotoFormComponent;
  let fixture: ComponentFixture<DashfotoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashfotoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashfotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
