import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollverificationComponent } from './payrollverification.component';

describe('PayrollverificationComponent', () => {
  let component: PayrollverificationComponent;
  let fixture: ComponentFixture<PayrollverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollverificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
