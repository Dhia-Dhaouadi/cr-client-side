import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeTelephoneLivraisonComponent } from './commande-telephone-livraison.component';

describe('CommandeTelephoneLivraisonComponent', () => {
  let component: CommandeTelephoneLivraisonComponent;
  let fixture: ComponentFixture<CommandeTelephoneLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeTelephoneLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeTelephoneLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
