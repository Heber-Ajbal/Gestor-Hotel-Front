import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHtlComponent } from './admin-htl.component';

describe('AdminHtlComponent', () => {
  let component: AdminHtlComponent;
  let fixture: ComponentFixture<AdminHtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
