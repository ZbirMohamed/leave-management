import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderFrameComponent } from './calender-frame.component';

describe('CalenderFrameComponent', () => {
  let component: CalenderFrameComponent;
  let fixture: ComponentFixture<CalenderFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
