/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SampleviewService } from './sampleview.service';

describe('Sampleview Service', () => {
  beforeEachProviders(() => [SampleviewService]);

  it('should ...',
      inject([SampleviewService], (service: SampleviewService) => {
    expect(service).toBeTruthy();
  }));
});
