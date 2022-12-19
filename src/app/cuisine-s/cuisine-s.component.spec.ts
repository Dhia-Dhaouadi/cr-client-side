import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineSComponent } from './cuisine-s.component';

describe('CuisineSComponent', () => {
  let component: CuisineSComponent;
  let fixture: ComponentFixture<CuisineSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
