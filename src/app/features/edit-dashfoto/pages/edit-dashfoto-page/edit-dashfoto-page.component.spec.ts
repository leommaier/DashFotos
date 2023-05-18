import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDashfotoPageComponent } from './edit-dashfoto-page.component';

describe('EditDashfotoPageComponent', () => {
  let component: EditDashfotoPageComponent;
  let fixture: ComponentFixture<EditDashfotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDashfotoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDashfotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
