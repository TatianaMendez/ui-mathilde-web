// components/Modal.tsx
import ImageFormat from '@/components/atoms/image/imageFormat';
import type { CardIndicatorProps } from './card.types';
import ProgressBar from '@components/molecules/progressBar/progressBar';

// Mapeo de nombres de imágenes a sus importaciones
const imageMap: Record<string, string> = {
  conversiones:
    'https://ftp.mathilde-ads.com/151-a05ae956a2c7caeb6f6d8952cac41a24.svg',
  click:
    'https://ftp.mathilde-ads.com/151-81ace0b5242dabee10930b76df01d43b.svg',
  impresiones:
    'https://ftp.mathilde-ads.com/151-b50587f350bafb8f19a9308325b45467.svg',
  porcentaje:
    'https://ftp.mathilde-ads.com/151-846076c2407128d25fffa4f35342d415.svg',
  vistas:
    'https://ftp.mathilde-ads.com/151-2b68ef020e57a0986c576b16607d85dd.svg',
};

export const CardIndicator: React.FC<CardIndicatorProps> = ({
  logo,
  number,
  title,
  start,
  end,
  current,
}) => {
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('es-ES', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex flex-col border bg-white px-3.5 py-7">
      <div className="flex justify-end">
        <ImageFormat
          src={imageMap[logo] || ''}
          alt="Icon"
          width={30}
          height={30}
        />
      </div>
      <h2 className="my-3 font-bold">{title}</h2>
      <small className="text-3xl">{formatNumber(number)}</small>
      <div className="mt-2 w-full">
        <ProgressBar start={start} end={end} current={current} />
      </div>
    </div>
  );
};
