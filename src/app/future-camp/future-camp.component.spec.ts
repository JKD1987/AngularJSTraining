import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureCampComponent } from './future-camp.component';

describe('FutureCampComponent', () => {
  let component: FutureCampComponent;
  let fixture: ComponentFixture<FutureCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
