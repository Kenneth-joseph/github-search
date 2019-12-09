import { TestBed } from '@angular/core/testing';

import { GitSService } from './git-s.service';

describe('GitSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitSService = TestBed.get(GitSService);
    expect(service).toBeTruthy();
  });
});
