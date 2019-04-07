import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordsViewComponent } from './chords-view.component';

describe('ChordsViewComponent', () => {
  let component: ChordsViewComponent;
  let fixture: ComponentFixture<ChordsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
