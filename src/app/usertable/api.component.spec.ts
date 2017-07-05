import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertableComponent } from './api.component';

describe('ApiComponent', () => {
  let component: UsertableComponent;
  let fixture: ComponentFixture<UsertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
