import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdbComponent } from './userdb.component';

describe('UserdbComponent', () => {
  let component: UserdbComponent;
  let fixture: ComponentFixture<UserdbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdbComponent]
    });
    fixture = TestBed.createComponent(UserdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
