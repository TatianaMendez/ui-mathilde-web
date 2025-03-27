// components/Modal.tsx
import { forwardRef } from 'react';
import { ImageFormat } from '@components/molecules/image/imageFormat';
import type { CardProps } from './card.types';
import { getBaseUrl } from '@utils/getBaseUrl';

const imagesPath = getBaseUrl();

export const CardFormat = forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { image, title, description } = props;

    return (
      <div className='border px-3.5 py-7 cursor-pointer' ref={ref}>
          <ImageFormat classIm='mx-auto' src={`${imagesPath}/public/assets/images/${image}.svg`} alt='Logo Mathilde ads' width={74} height={74}/>
          <h3 className='my-3 font-bold'>{title}</h3>
          <p>{description}</p>
      </div>
    );
  }
);

export default CardFormat;
