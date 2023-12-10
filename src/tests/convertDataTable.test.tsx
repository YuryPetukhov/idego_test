import { describe, expect, test } from 'vitest';
import { convertDataTable } from '../utils';
import biomData from '../data/biom.json';
import { expectedRows } from './share';

describe('convertDataTable', () => {
  test('convertDataTable should return expected rows', () => {
    expect(convertDataTable(biomData)).toStrictEqual(expectedRows);
  });
});
