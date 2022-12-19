import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheClientCaisseComponent } from './recherche-client-caisse.component';

describe('RechercheClientCaisseComponent', () => {
  let component: RechercheClientCaisseComponent;
  let fixture: ComponentFixture<RechercheClientCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheClientCaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheClientCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
