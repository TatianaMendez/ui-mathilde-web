import type { Meta, StoryObj } from '@storybook/react';
import { TableComponent } from './table';
import type { Column } from './table';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Organisms/Table',
  component: TableComponent,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['onToggleChange']
    }
  },
  tags: ['autodocs'],
  argTypes: {
    showSearch: {
      control: 'boolean',
      description: 'Mostrar barra de búsqueda'
    },
    itemsPerPage: {
      control: 'number',
      description: 'Items por página'
    },
    title: {
      control: 'text',
      description: 'Título de la tabla'
    },
    onToggleChange: {
      description: 'Callback cuando cambia un toggle',
      action: 'toggle changed'
    }
  }
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Datos de ejemplo básicos
const sampleData = [
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
    category: 'Accessories',
    price: 99,
  }
];

// Columnas básicas
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
    cell: (row) => `$${(row.price as number).toLocaleString()}`,
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

// Datos de usuarios con toggle
const userData = [
  {
    id: 1,
    status: true,
    name: 'Juan Pérez',
    email: 'juan@ejemplo.com',
    role: 'Admin'
  },
  {
    id: 2,
    status: false,
    name: 'María García',
    email: 'maria@ejemplo.com',
    role: 'Editor'
  }
];

// Columnas con un toggle
const columnsWithToggle: Column[] = [
  {
    header: 'Estado',
    relation: 'status',
    isToggle: true
  },
  {
    header: 'Nombre',
    relation: 'name'
  },
  {
    header: 'Email',
    relation: 'email'
  },
  {
    header: 'Rol',
    relation: 'role',
    cell: (row) => (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold 
        ${row.role === 'Admin' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
        {row.role as string}
      </span>
    )
  }
];

// Historia con toggle
export const TableWithToggle: Story = {
  args: {
    columns: columnsWithToggle,
    data: userData,
    showSearch: true,
    title: 'Usuarios con Toggle',
    onToggleChange: action('toggle changed in user table')
  }
};

// Datos de tareas con múltiples toggles
const taskData = [
  {
    id: 1,
    name: 'Diseño de UI',
    isActive: true,
    isUrgent: false,
    isCompleted: true,
    assignedTo: 'Ana'
  },
  {
    id: 2,
    name: 'Desarrollo Backend',
    isActive: true,
    isUrgent: true,
    isCompleted: false,
    assignedTo: 'Carlos'
  }
];

// Columnas con múltiples toggles
const multipleTogglesColumns: Column[] = [
  {
    header: 'Tarea',
    relation: 'name'
  },
  {
    header: 'Activo',
    relation: 'isActive',
    isToggle: true
  },
  {
    header: 'Urgente',
    relation: 'isUrgent',
    isToggle: true
  },
  {
    header: 'Completado',
    relation: 'isCompleted',
    isToggle: true
  },
  {
    header: 'Asignado a',
    relation: 'assignedTo'
  }
];

// Historia con múltiples toggles
export const TableWithMultipleToggles: Story = {
  args: {
    columns: multipleTogglesColumns,
    data: taskData,
    showSearch: true,
    title: 'Tareas con Múltiples Toggles',
    onToggleChange: action('toggle changed in tasks table')
  }
};
