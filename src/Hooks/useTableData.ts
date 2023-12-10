import { useState } from 'react';
import { convertDataTable } from '../utils';
import { GridColDef } from '@mui/x-data-grid';
import { IBiomRoot } from '../data/interfaces';

export interface IRow {
  id: string;
  name: string;
  tax_id: number;
  relative_abundance: string;
  abundance_score: number;
  uniqueMatches_frequency: number;
}

export const columnsData: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 400 },
  {
    field: 'tax_id',
    headerName: 'Tax ID',
    width: 400,
  },
  {
    field: 'abundance_score',
    headerName: 'Abundance score',
    width: 400,
  },
  {
    field: 'relative_abundance',
    headerName: 'Relative abundance',
    width: 400,
  },
  {
    field: 'uniqueMatches_frequency',
    headerName: 'Unique matches frequency',
    width: 400,
  },
];

export const useTableData = (data: IBiomRoot) => {
  const [rows] = useState<IRow[]>(convertDataTable(data));
  const [columns] = useState<GridColDef[]>(columnsData);

  return { columns, rows };
};
