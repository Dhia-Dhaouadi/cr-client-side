import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaisseboardComponent } from './caisseboard.component';

describe('CaisseboardComponent', () => {
  let component: CaisseboardComponent;
  let fixture: ComponentFixture<CaisseboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaisseboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaisseboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
