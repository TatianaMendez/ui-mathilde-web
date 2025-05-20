import type { Meta, StoryObj } from '@storybook/react';
import { SidebarPro, MenuItem, CardItem } from './sidebar-pro';
import { FaListAlt, FaUsers } from 'react-icons/fa';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';
const meta = {
  title: 'Organisms/SidebarPro',
  component: SidebarPro,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Color de fondo del sidebar',
    },
    textColor: {
      control: 'color',
      description: 'Color del texto y los iconos',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Estado inicial del sidebar',
    },
    onLogout: {
      action: 'logout',
      description: 'Callback para el botón de logout',
    },
  },
} satisfies Meta<typeof SidebarPro>;

export default meta;
type Story = StoryObj<typeof meta>;

// Datos de ejemplo para el logo
const logo = {
  src: 'https://ftp.mathilde-ads.com/151-5f18f5b0ce0f79b3c7e3ffbd4828ec14.png',
  alt: 'Logo Mathilde ads',
  width: 58,
  height: 58,
};

// Items del menú de ejemplo
const menuItems: MenuItem[] = [
  {
    id: 'campaigns',
    label: 'Campañas',
    icon: <FaListAlt className="text-xl" />,
    action: () => console.log('Campañas clicked'),
  },
  {
    id: 'media',
    label: 'Medios',
    icon: <BsFillBoxSeamFill className="text-xl" />,
    href: 'https://ssp.mathilde-ads.com/login',
    target: '_blank' as const,
  },
  {
    id: 'audiences',
    label: 'Audiencias',
    icon: <FaUsers className="text-xl" />,
    href: 'https://dsp.mathilde-ads.com/login',
    target: '_blank' as const,
  },
  {
    id: 'reports',
    label: 'Reportes',
    icon: <AiFillPieChart className="text-xl" />,
    href: '/reports',
    target: '_self' as const,
  },
  {
    id: 'settings',
    label: 'Configuración',
    icon: <IoSettingsSharp className="text-xl" />,
    href: '/settings',
    target: '_self' as const,
  },
];

// Tarjetas de campaña de ejemplo (ahora solo usan imageUrl)
const campaignCards: CardItem[] = [
  {
    id: 'own-media',
    title: 'Medios Propios',
    description:
      'Crea y administra campañas a los usuarios que ingresan a tus canales.',
    imageUrl: 'https://ftp.mathilde-ads.com/medios-propios.png',
    href: 'https://dsp.mathilde-ads.com/login',
    target: '_blank' as const,
  },
  {
    id: 'paid-media',
    title: 'Medios Pagos',
    description:
      'Activa campañas de Marketing Digital usando inventario de Redes Sociales y Google.',
    imageUrl: 'https://ftp.mathilde-ads.com/medios-pagos.png',
    href: '/summaryCampaign',
    target: '_self' as const,
  },
];

// Historia básica
export const Default: Story = {
  args: {
    logo,
    menuItems,
    campaignCards,
    backgroundColor: '#483FFF',
    textColor: '#483FFF',
    defaultCollapsed: true,
  },
};

// Historia sin tarjetas de campaña
export const WithoutCampaignCards: Story = {
  args: {
    logo,
    menuItems,
    backgroundColor: '#483FFF',
    textColor: '#483FFF',
    defaultCollapsed: true,
  },
};

// Historia con colores personalizados
export const CustomColors: Story = {
  args: {
    logo,
    menuItems,
    campaignCards,
    backgroundColor: '#2C3E50',
    textColor: '#ECF0F1',
    defaultCollapsed: false,
  },
};

// Historia sin botón de logout
export const WithoutLogout: Story = {
  args: {
    logo,
    menuItems,
    campaignCards,
    backgroundColor: '#483FFF',
    textColor: '#483FFF',
    defaultCollapsed: true,
  },
};
