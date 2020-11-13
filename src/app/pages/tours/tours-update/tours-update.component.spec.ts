import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursUpdateComponent } from './tours-update.component';

describe('ToursUpdateComponent', () => {
  let component: ToursUpdateComponent;
  let fixture: ComponentFixture<ToursUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
