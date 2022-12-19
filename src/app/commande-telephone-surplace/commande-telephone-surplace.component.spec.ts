import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeTelephoneSurplaceComponent } from './commande-telephone-surplace.component';

describe('CommandeTelephoneSurplaceComponent', () => {
  let component: CommandeTelephoneSurplaceComponent;
  let fixture: ComponentFixture<CommandeTelephoneSurplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeTelephoneSurplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeTelephoneSurplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
