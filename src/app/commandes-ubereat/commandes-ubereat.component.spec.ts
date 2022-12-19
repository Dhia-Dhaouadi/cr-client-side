import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesUbereatComponent } from './commandes-ubereat.component';

describe('CommandesUbereatComponent', () => {
  let component: CommandesUbereatComponent;
  let fixture: ComponentFixture<CommandesUbereatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesUbereatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesUbereatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
