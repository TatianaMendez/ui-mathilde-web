import type { Meta, StoryObj } from '@storybook/react';
import { TableComponent } from './table';
import type { Column } from './table';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

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
    id: 'p1',
    productName: 'Apple MacBook Pro 17"',
    color: 'Silver',
    category: 'Laptop',
    price: 2999,
  },
  {
    id: 'p2',
    productName: 'Microsoft Surface Pro',
    color: 'White',
    category: 'Laptop PC',
    price: 1999,
  },
  {
    id: 'p3',
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
    id: 't1',
    name: 'Diseño de UI',
    isActive: true,
    isUrgent: false,
    isCompleted: true,
    assignedTo: 'Ana'
  },
  {
    id: 't2',
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

// Datos de ejemplo con más usuarios para demostrar paginación
const paginatedUserData = Array(15).fill(null).map((_, index) => ({
  id: `user-${index + 1}`,
  status: index % 2 === 0,
  name: `Usuario ${index + 1}`,
  email: `usuario${index + 1}@ejemplo.com`,
  role: index % 3 === 0 ? 'Admin' : 'Editor'
}));

// Componente con estado para mantener los valores de los toggles
const TableWithState = () => {
  const [data, setData] = useState(paginatedUserData);

  const handleToggleChange = ({ 
    rowId, 
    checked, 
    columnKey 
  }: { 
    rowId: string | number;
    checked: boolean;
    columnKey: string;
  }) => {
    setData(prevData => 
      prevData.map(item => 
        item.id === rowId 
          ? { ...item, [columnKey]: checked }
          : item
      )
    );
    action('toggle changed in paginated table')({ rowId, checked, columnKey });
  };

  return (
    <TableComponent
      columns={columnsWithToggle}
      data={data}
      showSearch={true}
      itemsPerPage={5}
      title="Usuarios con Toggles Persistentes"
      onToggleChange={handleToggleChange}
    />
  );
};

// Historia con paginación y estado persistente
export const TableWithPersistentToggles: Story = {
  args: {
    columns: columnsWithToggle,
    data: paginatedUserData,
    showSearch: true,
    itemsPerPage: 5,
    title: "Usuarios con Toggles Persistentes",
    onToggleChange: action('toggle changed in paginated table')
  },
  render: () => <TableWithState />,
  parameters: {
    docs: {
      description: {
        story: 'Esta historia demuestra cómo los toggles mantienen su estado al cambiar de página. ' +
               'Puedes cambiar el estado de los toggles en cualquier página y al volver, ' +
               'el estado se mantendrá correctamente.'
      }
    }
  }
};
