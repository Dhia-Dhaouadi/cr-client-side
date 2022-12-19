import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeEnfaceSurplaceComponent } from './commande-enface-surplace.component';

describe('CommandeEnfaceSurplaceComponent', () => {
  let component: CommandeEnfaceSurplaceComponent;
  let fixture: ComponentFixture<CommandeEnfaceSurplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeEnfaceSurplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeEnfaceSurplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
