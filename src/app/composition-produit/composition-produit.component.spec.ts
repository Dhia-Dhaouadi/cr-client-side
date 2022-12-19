import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionProduitComponent } from './composition-produit.component';

describe('CompositionProduitComponent', () => {
  let component: CompositionProduitComponent;
  let fixture: ComponentFixture<CompositionProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
