import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenraio3Component } from './scenraio3.component';

describe('Scenraio3Component', () => {
  let component: Scenraio3Component;
  let fixture: ComponentFixture<Scenraio3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenraio3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenraio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
