import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanyeComponent } from './kanye.component';

describe('KanyeComponent', () => {
  let component: KanyeComponent;
  let fixture: ComponentFixture<KanyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
