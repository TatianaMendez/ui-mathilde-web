import type { Meta, StoryObj } from '@storybook/react';
import { CardFormat } from './cardFormat';
import { HiHome } from 'react-icons/hi';
import { FaReact } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

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
      name: 'click',
    },
    title: 'Card con Imagen',
    description: 'Esta es una card que muestra una imagen SVG',
  },
};

// Historia con icono de HeroIcons
export const WithHeroIcon: Story = {
  args: {
    icon: HiHome,
    title: 'Card con Icono Hero',
    description: 'Esta card muestra un icono de Hero Icons',
  },
};

// Historia con icono de Font Awesome
export const WithFontAwesome: Story = {
  args: {
    icon: FaReact,
    title: 'Card con Icono Font Awesome',
    description: 'Esta card muestra un icono de Font Awesome',
  },
};

// Historia con icono de Material Design
export const WithMaterialIcon: Story = {
  args: {
    icon: MdFavorite,
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
