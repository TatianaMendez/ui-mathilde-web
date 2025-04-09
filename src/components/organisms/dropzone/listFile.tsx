import ImageFormat from '@components/atoms/image/imageFormat';
import React from 'react';
import { ImBin } from 'react-icons/im';

export interface ListFileProps {
  files: File[];
  onDelete: (fileToDelete: File) => void;
}

const formatFileSize = (size: number): string => {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  return `${(size / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

export const ListFile: React.FC<ListFileProps> = ({ files, onDelete }) => {
  return (
    <div className="mt-4">
      <ul className="list-disc">
        {files.map((file, index) => (
          <div 
            key={index} 
            className="mb-5 flex w-full items-center justify-between rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex items-center">
              <ImageFormat
                classIm="mr-3"
                src={`../../../../public/assets/images/fileSVG.svg`}
                alt="icon dropzone"
                width={50}
              />
              <li className="text-base font-semibold text-gray-700">
                {file.name}
              </li>
            </div>
            <div className="mx-4 flex items-center">
              <span className="flex text-sm">{formatFileSize(file.size)}</span>
              <ImBin 
                className="ml-2 text-4xl text-gray-400 cursor-pointer" 
                onClick={() => onDelete(file)}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListFile;
