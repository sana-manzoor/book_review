import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindbComponent } from './admindb.component';

describe('AdmindbComponent', () => {
  let component: AdmindbComponent;
  let fixture: ComponentFixture<AdmindbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindbComponent]
    });
    fixture = TestBed.createComponent(AdmindbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
