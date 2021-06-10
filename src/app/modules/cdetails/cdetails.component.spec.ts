import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdetailsComponent } from './cdetails.component';

describe('CdetailsComponent', () => {
  let component: CdetailsComponent;
  let fixture: ComponentFixture<CdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
