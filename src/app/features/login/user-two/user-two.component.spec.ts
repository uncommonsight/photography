import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTwoComponent } from './user-two.component';

describe('UserTwoComponent', () => {
  let component: UserTwoComponent;
  let fixture: ComponentFixture<UserTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
