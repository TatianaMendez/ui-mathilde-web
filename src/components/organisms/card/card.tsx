// components/Modal.tsx
import { forwardRef } from 'react';
import { ImageFormat } from '@components/atoms/image/imageFormat';
import styles from './card.module.css';
import { CardProps } from './card.types';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { imageUrl, icon: Icon, title, description } = props;

    return (
      <div className={`${styles.Card} border px-3.5 py-7`} ref={ref}>
        {imageUrl ? (
          <ImageFormat
            classIm="mx-auto"
            src={imageUrl}
            alt={title}
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

Card.displayName = 'Card';

export default Card;
