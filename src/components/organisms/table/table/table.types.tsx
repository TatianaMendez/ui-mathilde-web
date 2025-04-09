export interface Column {
  header: string;
  relation: string;
  cell?: (row: Record<string, unknown>) => React.ReactNode;
}

export interface TableComponentProps {
  columns: Column[];
  data: Record<string, unknown>[];
  showSearch?: boolean;
  itemsPerPage?: number;
  title?: string;
}
