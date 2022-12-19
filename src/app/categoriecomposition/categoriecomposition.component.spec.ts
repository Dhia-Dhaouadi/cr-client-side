import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriecompositionComponent } from './categoriecomposition.component';

describe('CategoriecompositionComponent', () => {
  let component: CategoriecompositionComponent;
  let fixture: ComponentFixture<CategoriecompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriecompositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriecompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
