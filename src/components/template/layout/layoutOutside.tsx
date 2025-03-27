import ImageFormat from '@components/molecules/image/imageFormat';
import { getBaseUrl } from '@/utils/getBaseUrl';

const imagesPath = getBaseUrl();

export const LayoutOutside = () => {
  return (
      <div>
        <ImageFormat classIm='mx-auto mt-32' src={`${imagesPath}/public/assets/images/mathilde.png`} alt='Logo Mathilde ads' width={400} height={250}/>
        <div className='m-image-container'>
        <ImageFormat classIm='m-image' src={`${imagesPath}/public/assets/images/background-mathilde.png`} alt='Logo Mathilde ads' width={400} height={300}/>
        </div>
      </div>
  );
};

export default LayoutOutside;
