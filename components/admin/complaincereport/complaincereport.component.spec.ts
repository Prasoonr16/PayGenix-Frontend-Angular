import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaincereportComponent } from './complaincereport.component';

describe('ComplaincereportComponent', () => {
  let component: ComplaincereportComponent;
  let fixture: ComponentFixture<ComplaincereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaincereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaincereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
