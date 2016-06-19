/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SampleviewComponent } from './sampleview.component';

describe('Component: Sampleview', () => {
  it('should create an instance', () => {
    let component = new SampleviewComponent();
    expect(component).toBeTruthy();
  });
});
