import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinelosComponent } from './chinelos.component';

describe('ChinelosComponent', () => {
  let component: ChinelosComponent;
  let fixture: ComponentFixture<ChinelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
