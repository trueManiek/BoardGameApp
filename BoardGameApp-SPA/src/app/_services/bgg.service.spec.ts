/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BggService } from './bgg.service';

describe('Service: Bgg', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BggService]
    });
  });

  it('should ...', inject([BggService], (service: BggService) => {
    expect(service).toBeTruthy();
  }));
});
