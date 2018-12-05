import { TestBed, async, inject } from '@angular/core/testing';

import { SecondguardGuard } from './secondguard.guard';

describe('SecondguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondguardGuard]
    });
  });

  it('should ...', inject([SecondguardGuard], (guard: SecondguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
