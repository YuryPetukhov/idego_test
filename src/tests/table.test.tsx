import '@testing-library/jest-dom';
import { render, renderHook } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import { Table } from '../components/Table';
import {
  columnsData as expectedColumns,
  useTableData,
} from '../Hooks/useTableData';
import { expectedRows } from './share';
import biomData from '../data/biom.json';

describe('Table test', () => {
  const { result } = renderHook(() => useTableData(biomData));
  const { columns, rows } = result.current;

  test('useTable hook', () => {
    expect(columns).toStrictEqual(expectedColumns);
    expect(rows).toStrictEqual(expectedRows);
  });

  test('Table headers test', () => {
    const { getByText } = render(<Table columnBuffer={5} />);

    for (const item of columns) {
      const { headerName } = item;
      expect(getByText(headerName as string)).toBeInTheDocument();
    }
  });

  test('Table first row test', async () => {
    const { getAllByRole } = render(<Table columnBuffer={5} rowBuffer={5} />);
    // [0] is header row
    const row = getAllByRole('row')[1];
    const name = row.querySelector(`[data-field="name"]`);
    const tax_id = row.querySelector(`[data-field="tax_id"]`);
    const abundance_score = row.querySelector(`[data-field="abundance_score"]`);
    const relative_abundance = row.querySelector(
      `[data-field="relative_abundance"]`
    );
    const uniqueMatches_frequency = row.querySelector(
      `[data-field="uniqueMatches_frequency"]`
    );

    expect(name).toHaveTextContent('Lactobacillus crispatus SJ-3C-US');
    expect(tax_id).toHaveTextContent('575598');
    expect(abundance_score).toHaveTextContent('139028.29');
    expect(relative_abundance).toHaveTextContent('94.43%');
    expect(uniqueMatches_frequency).toHaveTextContent('1362');
  });
});
