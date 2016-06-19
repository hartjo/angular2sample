/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { Sampleview } from './sampleview.directive';

describe('Sampleview Directive', () => {
  it('should create an instance', () => {
    let directive = new Sampleview();
    expect(directive).toBeTruthy();
  });
});
