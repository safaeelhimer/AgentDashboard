import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspcaeagentComponent } from './espcaeagent.component';

describe('EspcaeagentComponent', () => {
  let component: EspcaeagentComponent;
  let fixture: ComponentFixture<EspcaeagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspcaeagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspcaeagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
