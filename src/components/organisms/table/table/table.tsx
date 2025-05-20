import * as React from 'react';
import { Table, TextInput } from 'flowbite-react';
import { HiSearch, HiSortAscending, HiSortDescending } from 'react-icons/hi';
import { CustomPagination } from '@components/molecules/pagination/pagination';
import Toggle from '@components/molecules/toggle/toggle';

export interface Column {
  header: string;
  relation: string;
  cell?: (row: Record<string, unknown>) => React.ReactNode;
  isToggle?: boolean;
  sortable?: boolean;
  toggleText?: {
    active: string;
    inactive: string;
  };
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
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  // Función para ordenar los datos
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue == null || bValue == null) return 0;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortConfig.direction === 'asc'
        ? Number(aValue) - Number(bValue)
        : Number(bValue) - Number(aValue);
    });
  }, [data, sortConfig]);

  // Filtrar datos basados en el término de búsqueda
  const filteredData = React.useMemo(() => {
    if (!searchTerm.trim()) return sortedData;

    return sortedData.filter((item) =>
      columns.some((column) => {
        const value = (item as Record<string, unknown>)[column.relation];
        return (
          value != null &&
          String(value).toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
      })
    );
  }, [sortedData, searchTerm, columns]);

  // Calcular datos paginados
  const paginatedData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [filteredData, currentPage, itemsPerPage]);

  // Calcular total de páginas
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSort = (key: string) => {
    setSortConfig((current) => {
      if (!current || current.key !== key) {
        return { key, direction: 'asc' };
      }
      return {
        key,
        direction: current.direction === 'asc' ? 'desc' : 'asc',
      };
    });
  };

  const renderCell = (column: Column, row: TableData) => {
    const cellValue = row[column.relation];

    if (column.isToggle) {
      const isChecked = Boolean(cellValue);
      return (
        <div className="flex items-center gap-2">
          <Toggle
            checked={isChecked}
            onChange={(checked) =>
              onToggleChange?.({
                rowId: row.id,
                checked,
                row,
                columnKey: column.relation,
              })
            }
            disabled={false}
          />
          {column.toggleText && (
            <span className="text-sm text-gray-600">
              {isChecked
                ? column.toggleText.active
                : column.toggleText.inactive}
            </span>
          )}
        </div>
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
              <Table.HeadCell
                key={index}
                className="cursor-pointer"
                onClick={() =>
                  column.sortable !== false && handleSort(column.relation)
                }
              >
                <div className="flex items-center gap-2">
                  {column.header}
                  {column.sortable !== false && (
                    <span>
                      {sortConfig?.key === column.relation ? (
                        sortConfig.direction === 'asc' ? (
                          <HiSortAscending className="size-4" />
                        ) : (
                          <HiSortDescending className="size-4" />
                        )
                      ) : (
                        <HiSortAscending className="size-4 opacity-50" />
                      )}
                    </span>
                  )}
                </div>
              </Table.HeadCell>
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
