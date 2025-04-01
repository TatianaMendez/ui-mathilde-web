// components/Modal.tsx
import { forwardRef, useState, useEffect } from 'react';
import { ImageFormat } from '@/components/atoms/image/imageFormat';
import type { IconType } from 'react-icons';
import { getBaseUrl } from '@utils/getBaseUrl';

const imagesPath = getBaseUrl();

interface CardProps {
  image?: {
    type: 'image' | 'icon';
    name: string;
    library?: 'hi' | 'fa' | 'md' | 'ai';
  };
  title?: string;
  description?: string;
}

export const CardFormat = forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { image, title, description } = props;
    const [Icon, setIcon] = useState<IconType | null>(null);

    useEffect(() => {
      const loadIcon = async () => {
        if (!image || image.type !== 'icon' || !image.library) return;

        try {
          let IconComponent: IconType | null = null;
          
          switch (image.library) {
            case 'hi': {
              const hi = await import('react-icons/hi');
              IconComponent = hi[image.name as keyof typeof hi] as IconType;
              break;
            }
            case 'fa': {
              const fa = await import('react-icons/fa');
              IconComponent = fa[image.name as keyof typeof fa] as IconType;
              break;
            }
            case 'md': {
              const md = await import('react-icons/md');
              IconComponent = md[image.name as keyof typeof md] as IconType;
              break;
            }
            case 'ai': {
              const ai = await import('react-icons/ai');
              IconComponent = ai[image.name as keyof typeof ai] as IconType;
              break;
            }
          }
          
          if (IconComponent) {
            setIcon(() => IconComponent);
          }
        } catch (error) {
          console.error('Error cargando el icono:', error);
        }
      };

      loadIcon();
    }, [image]);

    const renderContent = () => {
      if (!image) return null;

      if (image.type === 'image') {
        return (
          <ImageFormat 
            classIm='mx-auto' 
            src={`${imagesPath}/public/assets/images/${image.name}.svg`} 
            alt={image.name} 
            width={74} 
            height={74}
          />
        );
      }

      if (image.type === 'icon' && Icon) {
        return (
          <div className="flex justify-center">
            <Icon size={74} />
          </div>
        );
      }

      // Placeholder mientras se carga el icono
      return <div className="w-[74px] h-[74px] mx-auto" />;
    };

    return (
      <div className='border px-3.5 py-7 cursor-pointer' ref={ref}>
        {renderContent()}
        <h3 className='my-3 font-bold'>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
);

CardFormat.displayName = 'CardFormat';

export default CardFormat;
