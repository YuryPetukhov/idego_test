import { DataGrid } from '@mui/x-data-grid';
import { useTableData } from '../../Hooks/useTableData';
import biomData from '../../data/biom.json';

export const Table = ({ ...rest }) => {
  const { columns, rows } = useTableData(biomData);

  return <DataGrid {...rest} columns={columns} rows={rows} />;
};
