import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertFailedComponent } from './alert-failed.component';

describe('AlertFailedComponent', () => {
  let component: AlertFailedComponent;
  let fixture: ComponentFixture<AlertFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertFailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
