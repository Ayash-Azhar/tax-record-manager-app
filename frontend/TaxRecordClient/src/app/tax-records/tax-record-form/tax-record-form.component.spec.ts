import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRecordFormComponent } from './tax-record-form.component';

describe('TaxRecordFormComponent', () => {
  let component: TaxRecordFormComponent;
  let fixture: ComponentFixture<TaxRecordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxRecordFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
