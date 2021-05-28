import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionDisponibleComponent } from './habitacion-disponible.component';

describe('HabitacionDisponibleComponent', () => {
  let component: HabitacionDisponibleComponent;
  let fixture: ComponentFixture<HabitacionDisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionDisponibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
