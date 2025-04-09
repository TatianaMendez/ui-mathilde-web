import type { Meta, StoryObj } from '@storybook/react';
import { TableComponent } from './table';
import { type Column } from './table.types';

const meta = {
  title: 'Organisms/Table',
  component: TableComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Datos de ejemplo
const sampleData: Record<string, unknown>[] = [
  {
    productName: 'Apple MacBook Pro 17"',
    color: 'Silver',
    category: 'Laptop',
    price: 2999,
  },
  {
    productName: 'Microsoft Surface Pro',
    color: 'White',
    category: 'Laptop PC',
    price: 1999,
  },
  {
    productName: 'Magic Mouse 2',
    color: 'Black',
    category: 'relationies',
    price: 99,
  },
  {
    productName: 'Google Pixel Phone',
    color: 'Gray',
    category: 'Phone',
    price: 799,
  },
  {
    productName: 'Apple Watch 5',
    color: 'Red',
    category: 'Wearables',
    price: 999,
  },
];

// Columnas de ejemplo
const sampleColumns: Column[] = [
  {
    header: 'Producto',
    relation: 'productName',
  },
  {
    header: 'Color',
    relation: 'color',
  },
  {
    header: 'Categoría',
    relation: 'category',
  },
  {
    header: 'Precio',
    relation: 'price',
    cell: (row: Record<string, unknown>) =>
      `$${(row.price as number).toLocaleString()}`,
  },
];

// Historia básica
export const Basic: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    showSearch: false,
    itemsPerPage: 5,
  },
};

// Historia con búsqueda
export const WithSearch: Story = {
  args: {
    ...Basic.args,
    showSearch: true,
    title: 'Tabla con búsqueda',
  },
};

// Historia con paginación personalizada
export const CustomPagination: Story = {
  args: {
    ...Basic.args,
    itemsPerPage: 2,
    title: 'Tabla con paginación personalizada',
  },
};

// Historia con muchos datos
export const ManyRows: Story = {
  args: {
    ...Basic.args,
    data: Array(20)
      .fill(null)
      .map((_, index) => ({
        productName: `Producto ${index + 1}`,
        color: ['Red', 'Blue', 'Green', 'Yellow'][index % 4],
        category: ['Electronics', 'Clothing', 'Books', 'Sports'][index % 4],
        price: Math.floor(Math.random() * 1000) + 100,
      })) as Record<string, unknown>[],
    title: 'Tabla con muchos registros',
    showSearch: true,
  },
};

// Historia con columnas personalizadas
export const CustomColumns: Story = {
  args: {
    columns: [
      {
        header: 'Producto',
        relation: 'productName',
        cell: (row: Record<string, unknown>) => (
          <div className="flex items-center">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
            {row.productName as string}
          </div>
        ),
      },
      {
        header: 'Precio',
        relation: 'price',
        cell: (row: Record<string, unknown>) => (
          <span className="font-bold text-green-600">
            ${(row.price as number).toLocaleString()}
          </span>
        ),
      },
    ],
    data: sampleData,
    title: 'Tabla con columnas personalizadas',
    showSearch: true,
  },
};

// Historia con tema oscuro
export const DarkTheme: Story = {
  args: {
    ...Basic.args,
    title: 'Tabla con tema oscuro',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    theme: 'dark',
  },
};
