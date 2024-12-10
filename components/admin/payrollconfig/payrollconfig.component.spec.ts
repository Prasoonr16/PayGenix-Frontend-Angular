import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollconfigComponent } from './payrollconfig.component';

describe('PayrollconfigComponent', () => {
  let component: PayrollconfigComponent;
  let fixture: ComponentFixture<PayrollconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollconfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
