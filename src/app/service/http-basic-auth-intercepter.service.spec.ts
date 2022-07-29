import { TestBed } from '@angular/core/testing';

import { HttpBasicAuthIntercepterService } from './http-basic-auth-intercepter.service';

describe('HttpBasicAuthIntercepterService', () => {
  let service: HttpBasicAuthIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBasicAuthIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
