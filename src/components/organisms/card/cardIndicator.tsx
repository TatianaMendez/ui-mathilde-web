// components/Modal.tsx
import ImageFormat from '@/components/atoms/image/imageFormat';
import type { CardIndicatorProps } from './card.types';
import ProgressBar from '@components/molecules/progressBar/progressBar';
import { getBaseUrl } from '@utils/getBaseUrl';

const imagesPath = getBaseUrl();

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
          src={`${imagesPath}/public/assets/images/${logo}.svg`}
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
