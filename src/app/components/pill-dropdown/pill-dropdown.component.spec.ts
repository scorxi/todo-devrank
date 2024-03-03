import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillDropdownComponent } from './pill-dropdown.component';

describe('PillDropdownComponent', () => {
  let component: PillDropdownComponent;
  let fixture: ComponentFixture<PillDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PillDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
