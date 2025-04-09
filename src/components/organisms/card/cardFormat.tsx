// components/Modal.tsx
import { forwardRef } from 'react';
import { ImageFormat } from '@components/atoms/image/imageFormat';
import styles from './card.module.css';
import { CardProps } from './card.types';

export const CardFormat = forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { image, icon: Icon, title, description } = props;

    return (
      <div className={`${styles.cardFormat} border px-3.5 py-7`} ref={ref}>
        {image?.type === 'image' ? (
          <ImageFormat
            classIm="mx-auto"
            src={`../../../../public/assets/images/${image.name}.svg`}
            alt={image.name}
            width={74}
            height={74}
          />
        ) : Icon ? (
          <div className="flex justify-center">
            <Icon size={74} />
          </div>
        ) : null}
        <h3 className="my-3 font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
);

CardFormat.displayName = 'CardFormat';

export default CardFormat;
