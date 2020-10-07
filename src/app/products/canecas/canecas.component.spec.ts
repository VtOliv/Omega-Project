import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanecasComponent } from './canecas.component';

describe('CanecasComponent', () => {
  let component: CanecasComponent;
  let fixture: ComponentFixture<CanecasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanecasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
