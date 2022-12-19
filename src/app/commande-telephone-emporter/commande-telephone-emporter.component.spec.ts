import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeTelephoneEmporterComponent } from './commande-telephone-emporter.component';

describe('CommandeTelephoneEmporterComponent', () => {
  let component: CommandeTelephoneEmporterComponent;
  let fixture: ComponentFixture<CommandeTelephoneEmporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeTelephoneEmporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeTelephoneEmporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
