import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayStubsComponent } from './pay-stubs.component';

describe('PayStubsComponent', () => {
  let component: PayStubsComponent;
  let fixture: ComponentFixture<PayStubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayStubsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayStubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
