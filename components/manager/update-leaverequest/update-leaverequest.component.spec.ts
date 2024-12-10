import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeaverequestComponent } from './update-leaverequest.component';

describe('UpdateLeaverequestComponent', () => {
  let component: UpdateLeaverequestComponent;
  let fixture: ComponentFixture<UpdateLeaverequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLeaverequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLeaverequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
