export interface CardProps {
  image?: {
    type: 'image' | 'icon';
    name: string;
  };
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number }>; // Nuevo prop para el icono
}
export interface CardIndicatorProps {
  logo: string;
  title: string;
  number: number;
  start: number;
  end: number;
  current: number;
}
