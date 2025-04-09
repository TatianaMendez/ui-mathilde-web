import { FileInput, Label } from 'flowbite-react';
import ImageFormat from '@components/atoms/image/imageFormat';

export interface DropzoneProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}


export const Dropzone: React.FC<DropzoneProps> = ({onChange}) => {
  return (
    <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex lg:w-1/4 md:w-2/4 items-center justify-center pb-6 pt-5">
          <ImageFormat
            classIm="mr-3"
            src='../../../../public/assets/images/file.svg'
            alt="icon dropzone"
            width={74}
            height={74}
          />
          <p className="mb-2 text-sm font-light text-gray-400 dark:text-gray-400">
            <span className="font-bold text-gray-500">Arrastra</span> el feed de
            datos de tu campaña o{' '}
            <span className="font-bold text-gray-500">
              selecciona el archivo de tu computadora
            </span>
          </p>
        </div>
        <FileInput id="dropzone-file" className="hidden" onChange={onChange}/>
      </Label>
    </div>
  );
}
