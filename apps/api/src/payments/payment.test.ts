import { describe, expect, it } from 'vitest';
import { pageOf } from './payment.js';

describe('pageOf', () => {
  it('reads the limit and the offset', () => {
    expect(pageOf({ limit: '10', offset: '20' })).toEqual({ limit: 10, offset: 20 });
  });

  it('keeps the limit between 1 and 100, and falls back on the defaults', () => {
    expect(pageOf({ limit: '500' })).toEqual({ limit: 100, offset: 0 });
    expect(pageOf({ limit: 'abc', offset: '-3' })).toEqual({ limit: 50, offset: 0 });
  });
});
