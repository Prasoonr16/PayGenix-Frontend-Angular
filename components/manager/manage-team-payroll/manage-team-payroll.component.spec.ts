import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeamPayrollComponent } from './manage-team-payroll.component';

describe('ManageTeamPayrollComponent', () => {
  let component: ManageTeamPayrollComponent;
  let fixture: ComponentFixture<ManageTeamPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTeamPayrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTeamPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
