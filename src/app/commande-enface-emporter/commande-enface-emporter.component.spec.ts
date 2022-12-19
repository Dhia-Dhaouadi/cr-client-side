import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeEnfaceEmporterComponent } from './commande-enface-emporter.component';

describe('CommandeEnfaceEmporterComponent', () => {
  let component: CommandeEnfaceEmporterComponent;
  let fixture: ComponentFixture<CommandeEnfaceEmporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeEnfaceEmporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeEnfaceEmporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
