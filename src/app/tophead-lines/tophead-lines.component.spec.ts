import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheadLinesComponent } from './tophead-lines.component';

describe('TopheadLinesComponent', () => {
  let component: TopheadLinesComponent;
  let fixture: ComponentFixture<TopheadLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopheadLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopheadLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
