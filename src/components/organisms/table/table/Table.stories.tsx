import type { Meta, StoryObj } from '@storybook/react';
import { TableComponent, Column } from './table';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Organisms/Table',
  component: TableComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showSearch: {
      control: 'boolean',
      description: 'Mostrar barra de búsqueda',
    },
    itemsPerPage: {
      control: 'number',
      description: 'Número de elementos por página',
    },
    title: {
      control: 'text',
      description: 'Título de la tabla',
    },
  },
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Datos de ejemplo
const sampleData = [
  { id: 1, name: 'Producto 1', status: true, price: 100 },
  { id: 2, name: 'Producto 2', status: false, price: 200 },
  { id: 3, name: 'Producto 3', status: true, price: 300 },
  { id: 4, name: 'Producto 4', status: false, price: 400 },
  { id: 5, name: 'Producto 5', status: true, price: 500 },
];

// Columnas con toggle y texto
const columnsWithToggle: Column[] = [
  {
    header: 'Nombre',
    relation: 'name',
    sortable: true,
  },
  {
    header: 'Estado',
    relation: 'status',
    isToggle: true,
    toggleText: {
      active: 'Activo',
      inactive: 'Inactivo',
    },
  },
  {
    header: 'Precio',
    relation: 'price',
    sortable: true,
  },
];

// Columnas con toggle sin texto
const columnsWithoutToggleText: Column[] = [
  {
    header: 'Nombre',
    relation: 'name',
    sortable: true,
  },
  {
    header: 'Estado',
    relation: 'status',
    isToggle: true,
  },
  {
    header: 'Precio',
    relation: 'price',
    sortable: true,
  },
];

// Historia con toggle y texto
export const WithToggleAndText: Story = {
  args: {
    columns: columnsWithToggle,
    data: sampleData,
    showSearch: true,
    itemsPerPage: 5,
    title: 'Productos',
    onToggleChange: action('toggle-changed'),
  },
};

// Historia con toggle sin texto
export const WithToggleWithoutText: Story = {
  args: {
    columns: columnsWithoutToggleText,
    data: sampleData,
    showSearch: true,
    itemsPerPage: 5,
    title: 'Productos',
    onToggleChange: action('toggle-changed'),
  },
};

// Historia con múltiples toggles
export const WithMultipleToggles: Story = {
  args: {
    columns: [
      {
        header: 'Nombre',
        relation: 'name',
        sortable: true,
      },
      {
        header: 'Estado',
        relation: 'status',
        isToggle: true,
        toggleText: {
          active: 'Activo',
          inactive: 'Inactivo',
        },
      },
      {
        header: 'Disponible',
        relation: 'available',
        isToggle: true,
        toggleText: {
          active: 'En Stock',
          inactive: 'Sin Stock',
        },
      },
      {
        header: 'Precio',
        relation: 'price',
        sortable: true,
      },
    ],
    data: [
      { id: 1, name: 'Producto 1', status: true, available: false, price: 100 },
      { id: 2, name: 'Producto 2', status: false, available: true, price: 200 },
      { id: 3, name: 'Producto 3', status: true, available: true, price: 300 },
      {
        id: 4,
        name: 'Producto 4',
        status: false,
        available: false,
        price: 400,
      },
      { id: 5, name: 'Producto 5', status: true, available: true, price: 500 },
    ],
    showSearch: true,
    itemsPerPage: 5,
    title: 'Productos',
    onToggleChange: action('toggle-changed'),
  },
};
