import * as React from 'react';
import { Table, TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';
import { CustomPagination } from '@components/molecules/pagination/pagination';
import Toggle from '@components/molecules/toggle/toggle';

export interface Column {
  header: string;
  relation: string;
  cell?: (row: Record<string, unknown>) => React.ReactNode;
  isToggle?: boolean;
}

interface TableData extends Record<string, unknown> {
  id: string | number;
  [key: string]: unknown;
}

export interface TableComponentProps {
  columns: Column[];
  data: TableData[];
  showSearch?: boolean;
  itemsPerPage?: number;
  title?: string;
  onToggleChange?: (rowData: {
    rowId: string | number;
    checked: boolean;
    row: TableData;
    columnKey: string;
  }) => void;
}

export const TableComponent: React.FC<TableComponentProps> = ({
  columns,
  data,
  showSearch = false,
  itemsPerPage = 5,
  title,
  onToggleChange,
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);

  // Filtrar datos basados en el término de búsqueda
  const filteredData = React.useMemo(() => {
    if (!searchTerm.trim()) return data;

    return data.filter((item) =>
      columns.some((column) => {
        const value = (item as Record<string, unknown>)[column.relation];
        return (
          value != null &&
          String(value).toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
      })
    );
  }, [data, searchTerm, columns]);

  // Calcular datos paginados
  const paginatedData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [filteredData, currentPage, itemsPerPage]);

  // Calcular total de páginas
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const renderCell = (column: Column, row: TableData) => {
    const cellValue = row[column.relation];

    if (column.isToggle) {
      return (
        <Toggle
          checked={Boolean(cellValue)}
          onChange={(checked) => 
            onToggleChange?.({
              rowId: row.id,
              checked,
              row,
              columnKey: column.relation
            })
          }
          disabled={false}
        />
      );
    }

    if (column.cell) {
      return column.cell(row);
    }

    return cellValue != null ? String(cellValue) : '';
  };

  return (
    <div className="w-full">
      {/* Header con título y búsqueda */}
      <div className="mb-4 flex items-center justify-between">
        {title && <h2 className="text-xl font-bold">{title}</h2>}
      </div>

      <div className="mb-4 flex">
        {showSearch && (
          <div className="w-1/2">
            <TextInput
              rightIcon={HiSearch}
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex w-full justify-end">
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <Table striped>
          <Table.Head>
            {columns.map((column, index) => (
              <Table.HeadCell key={index}>{column.header}</Table.HeadCell>
            ))}
          </Table.Head>
          <hr />

          <Table.Body className="divide-y">
            {paginatedData.map((row) => (
              <Table.Row
                key={row.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                {columns.map((column, colIndex) => (
                  <Table.Cell
                    key={`${row.id}-${colIndex}`}
                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                  >
                    {renderCell(column, row)}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default TableComponent;
