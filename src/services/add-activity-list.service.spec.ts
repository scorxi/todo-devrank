import { TestBed } from '@angular/core/testing';

import { AddActivityListService } from './add-activity-list.service';

describe('AddActivityListService', () => {
  let service: AddActivityListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddActivityListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
