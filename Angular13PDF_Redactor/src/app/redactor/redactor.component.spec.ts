import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactorComponent } from './redactor.component';

describe('RedactorComponent', () => {
  let component: RedactorComponent;
  let fixture: ComponentFixture<RedactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
