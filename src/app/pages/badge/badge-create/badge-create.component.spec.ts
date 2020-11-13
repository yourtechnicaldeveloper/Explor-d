import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeCreateComponent } from './badge-create.component';

describe('BadgeCreateComponent', () => {
  let component: BadgeCreateComponent;
  let fixture: ComponentFixture<BadgeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
