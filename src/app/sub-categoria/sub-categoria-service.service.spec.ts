import { TestBed } from '@angular/core/testing';

import { SubCategoriaServiceService } from './sub-categoria-service.service';

describe('SubCategoriaServiceService', () => {
  let service: SubCategoriaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCategoriaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
