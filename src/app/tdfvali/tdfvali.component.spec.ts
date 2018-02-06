import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfvaliComponent } from './tdfvali.component';

describe('TdfvaliComponent', () => {
  let component: TdfvaliComponent;
  let fixture: ComponentFixture<TdfvaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfvaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfvaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
