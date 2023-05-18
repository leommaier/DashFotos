import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDashfotoPageComponent } from './new-dashfoto-page.component';

describe('NewDashfotoPageComponent', () => {
  let component: NewDashfotoPageComponent;
  let fixture: ComponentFixture<NewDashfotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewDashfotoPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewDashfotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
