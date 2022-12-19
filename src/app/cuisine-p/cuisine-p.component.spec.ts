import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinePComponent } from './cuisine-p.component';

describe('CuisinePComponent', () => {
  let component: CuisinePComponent;
  let fixture: ComponentFixture<CuisinePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisinePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisinePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
