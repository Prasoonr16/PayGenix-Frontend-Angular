import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollprocessingComponent } from './payrollprocessing.component';

describe('PayrollprocessingComponent', () => {
  let component: PayrollprocessingComponent;
  let fixture: ComponentFixture<PayrollprocessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollprocessingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
