import { DataGrid } from '@mui/x-data-grid';
import { useTableData } from '../../Hooks/useTableData';
import biomData from '../../data/biom.json';

export const Table = () => {
  const { columns, rows } = useTableData(biomData);

  return <DataGrid columns={columns} rows={rows} />;
};
