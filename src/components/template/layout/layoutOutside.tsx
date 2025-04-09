import ImageFormat from '@/components/atoms/image/imageFormat';
import style from './layoutOutside.module.css';

export const LayoutOutside = () => {
  return (
    <div className="mt-32">
      <ImageFormat
        classIm="mx-auto"
        src={`../../../../public/assets/images/mathilde.png`}
        alt="Logo Mathilde ads"
        width={400}
        height={250}
      />
      <div className={style['m-image-container']}>
        <ImageFormat
          classIm={style['m-image']}
          src={`../../../../public/assets/images/background-mathilde.png`}
          alt="Logo Mathilde ads"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default LayoutOutside;
