import { FileInput, Label } from 'flowbite-react';
import ImageFormat from '@components/atoms/image/imageFormat';
import { useState, useCallback } from 'react';

// Tipos de archivo comunes
export type FileType =
  | 'image/*'
  | 'application/pdf'
  | 'application/msword'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.ms-excel'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/vnd.ms-powerpoint'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'text/csv'
  | 'application/json'
  | 'application/xml';

// Mapeo de tipos MIME a nombres amigables
const friendlyFileTypes: Record<string, string> = {
  'image/*': 'Imágenes (JPG, PNG, GIF, etc.)',
  'application/pdf': 'Documentos PDF',
  'application/msword': 'Documentos Word (.doc)',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    'Documentos Word (.docx)',
  'application/vnd.ms-excel': 'Hojas de cálculo Excel (.xls)',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
    'Hojas de cálculo Excel (.xlsx)',
  'application/vnd.ms-powerpoint': 'Presentaciones PowerPoint (.ppt)',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation':
    'Presentaciones PowerPoint (.pptx)',
  'text/csv': 'Archivos CSV',
  'application/json': 'Archivos JSON',
  'application/xml': 'Archivos XML',
};

export interface DropzoneProps {
  onChange?: (files: File[]) => void;
  accept?: FileType | FileType[];
  maxSize?: number; // en MB
  multiple?: boolean;
  helperText?: string;
}

export const Dropzone: React.FC<DropzoneProps> = ({
  onChange,
  accept = 'application/pdf',
  maxSize = 10, // 10MB por defecto
  multiple = false,
  helperText = '',
}) => {
  const [isDragging, setIsDragging] = useState(false);

  // Convertir el tipo de archivo a string para el atributo accept
  const acceptString = Array.isArray(accept) ? accept.join(',') : accept;

  // Obtener nombres amigables para los tipos de archivo
  const getFriendlyFileTypes = () => {
    if (Array.isArray(accept)) {
      return accept.map((type) => friendlyFileTypes[type] || type).join(', ');
    }
    return friendlyFileTypes[accept] || accept;
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFiles(files);
      }
    },
    [accept, maxSize, multiple, onChange]
  );

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length > 0) {
        handleFiles(files);
      }
    },
    [accept, maxSize, multiple, onChange]
  );

  const handleFiles = useCallback(
    (files: File[]) => {
      // Validar cantidad de archivos
      if (!multiple && files.length > 1) {
        alert('Solo se permite un archivo');
        return;
      }

      // Validar tipos de archivo
      const validFiles = files.filter((file) => {
        if (Array.isArray(accept)) {
          return accept.some((type) => {
            if (type === 'image/*') {
              return file.type.startsWith('image/');
            }
            return file.type === type;
          });
        }
        if (accept === 'image/*') {
          return file.type.startsWith('image/');
        }
        return file.type === accept;
      });

      if (validFiles.length === 0) {
        alert(
          `Tipo de archivo no permitido. Tipos permitidos: ${getFriendlyFileTypes()}`
        );
        return;
      }

      // Validar tamaño
      const sizeValidFiles = validFiles.filter(
        (file) => file.size <= maxSize * 1024 * 1024
      );
      if (sizeValidFiles.length !== validFiles.length) {
        alert(`Algunos archivos exceden el tamaño máximo de ${maxSize}MB`);
      }

      if (sizeValidFiles.length > 0) {
        onChange?.(sizeValidFiles);
      }
    },
    [accept, maxSize, multiple, onChange]
  );

  return (
    <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className={`flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 bg-gray-50'
        } hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex w-2/4 items-center justify-center pb-6 pt-5">
          <ImageFormat
            classIm="mr-3"
            src="https://ftp.mathilde-ads.com/151-e44e2ee2d56e5997506c6365eb4d87d3.svg"
            alt="icon dropzone"
            width={74}
            height={74}
          />
          <div className="flex flex-col">
            <p className="mb-2 text-sm font-light text-gray-400 dark:text-gray-400">
              <span className="font-bold text-gray-500">Arrastra</span> el feed
              de datos de tu campaña o{' '}
              <span className="font-bold text-gray-500">
                selecciona el archivo de tu computadora
              </span>{' '}
              {helperText}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Tipos permitidos:</span>{' '}
              {getFriendlyFileTypes()} |{' '}
              <span className="font-semibold">Tamaño máximo:</span> {maxSize} MB
            </p>
          </div>
        </div>
        <FileInput
          id="dropzone-file"
          className="hidden"
          onChange={handleFileInputChange}
          accept={acceptString}
          multiple={multiple}
        />
      </Label>
    </div>
  );
};
