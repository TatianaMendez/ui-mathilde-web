import type { Meta, StoryObj } from '@storybook/react';
import { CardFormat } from './cardFormat';

const meta = {
  title: 'Organisms/CardFormat',
  component: CardFormat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardFormat>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia con imagen
export const WithImage: Story = {
  args: {
    image: {
      type: 'image',
      name: 'vistas', // Asegúrate de que este archivo exista en public/assets/images/
    },
    title: 'Card con Imagen',
    description: 'Esta es una card que muestra una imagen SVG',
  },
};

// Historia con icono de HeroIcons
export const WithHeroIcon: Story = {
  args: {
    image: {
      type: 'icon',
      name: 'HiHome',
      library: 'hi',
    },
    title: 'Card con Icono Hero',
    description: 'Esta card muestra un icono de Hero Icons',
  },
};

// Historia con icono de Font Awesome
export const WithFontAwesome: Story = {
  args: {
    image: {
      type: 'icon',
      name: 'FaReact',
      library: 'fa',
    },
    title: 'Card con Icono Font Awesome',
    description: 'Esta card muestra un icono de Font Awesome',
  },
};

// Historia con icono de Material Design
export const WithMaterialIcon: Story = {
  args: {
    image: {
      type: 'icon',
      name: 'MdFavorite',
      library: 'md',
    },
    title: 'Card con Icono Material',
    description: 'Esta card muestra un icono de Material Design',
  },
};

// Historia sin imagen ni icono
export const NoImage: Story = {
  args: {
    title: 'Card sin Imagen',
    description: 'Esta card no tiene imagen ni icono',
  },
};

// Historia con diferentes variantes en una grid
export const GridLayout: Story = {
  decorators: [
    (Story) => (
      <div className="grid grid-cols-3 gap-4 p-4">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <CardFormat
        image={{ type: 'image', name: 'vistas' }}
        title="Imagen SVG"
        description="Card con imagen SVG"
      />
      <CardFormat
        image={{ type: 'icon', name: 'HiHome', library: 'hi' }}
        title="Hero Icon"
        description="Card con icono de Hero Icons"
      />
      <CardFormat
        image={{ type: 'icon', name: 'FaReact', library: 'fa' }}
        title="Font Awesome"
        description="Card con icono de Font Awesome"
      />
    </>
  ),
}; 