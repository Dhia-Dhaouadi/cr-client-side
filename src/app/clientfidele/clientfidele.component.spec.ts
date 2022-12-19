import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientfideleComponent } from './clientfidele.component';

describe('ClientfideleComponent', () => {
  let component: ClientfideleComponent;
  let fixture: ComponentFixture<ClientfideleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientfideleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientfideleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
