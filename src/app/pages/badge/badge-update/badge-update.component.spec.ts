import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeUpdateComponent } from './badge-update.component';

describe('BadgeUpdateComponent', () => {
  let component: BadgeUpdateComponent;
  let fixture: ComponentFixture<BadgeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
