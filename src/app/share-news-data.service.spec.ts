import { TestBed } from '@angular/core/testing';

import { ShareNewsDataService } from './share-news-data.service';

describe('ShareNewsDataService', () => {
  let service: ShareNewsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareNewsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
