import ImageFormat from '@/components/atoms/image/imageFormat';
import style from './layoutOutside.module.css';

export const LayoutOutside = () => {
  return (
    <div className="mt-32">
      <ImageFormat
        classIm="mx-auto"
        src="https://ftp.mathilde-ads.com/151-41415c0c026df82dbb391c09db474cfa.png"
        alt="Logo Mathilde ads"
        width={400}
        height={250}
      />
      <div className={style['m-image-container']}>
        <ImageFormat
          classIm={style['m-image']}
          src="https://ftp.mathilde-ads.com/151-3f28d319ba5adbe318c58ef38b858e50.png"
          alt="Logo Mathilde ads"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default LayoutOutside;
