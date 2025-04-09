import type { StoryObj } from '@storybook/react';
import FileList from './listFile';

export const ValuesStories = {
  title: 'Organisms/FileList',
  component: FileList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as const;

export default ValuesStories;

type Story = StoryObj<typeof FileList>;

// Crear archivos de ejemplo
const createMockFile = (name: string, type: string, size: number): File => {
  const file = new File([''], name, { type });
  Object.defineProperty(file, 'size', { value: size });
  return file;
};

const sampleFiles = [
  createMockFile('documento.pdf', 'application/pdf', 1024576), // 1MB
  createMockFile('imagen.jpg', 'image/jpeg', 2048576), // 2MB
  createMockFile('hoja-calculo.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 512000), // 500KB
];

// Historia con un solo archivo
export const SingleFile: Story = {
  args: {
    files: [sampleFiles[0]],
  },
};

// Historia con múltiples archivos
export const MultipleFiles: Story = {
  args: {
    files: sampleFiles,
  },
};

// Historia sin archivos
export const EmptyList: Story = {
  args: {
    files: [],
  },
};

// Historia con muchos archivos
export const ManyFiles: Story = {
  args: {
    files: Array(10).fill(null).map((_, index) => 
      createMockFile(
        `archivo-${index + 1}.${['pdf', 'jpg', 'xlsx', 'docx'][index % 4]}`,
        'application/octet-stream',
        Math.floor(Math.random() * 5000000) + 1000000 // Tamaños aleatorios entre 1MB y 6MB
      )
    ),
  },
};

// Historia con nombres largos
export const LongFileNames: Story = {
  args: {
    files: [
      createMockFile('este-es-un-nombre-de-archivo-muy-largo-que-podria-causar-problemas-de-diseño.pdf', 'application/pdf', 1024576),
      createMockFile('otro-archivo-con-nombre-extremadamente-largo-para-probar-el-comportamiento.jpg', 'image/jpeg', 2048576),
    ],
  },
};

// Historia con diferentes tipos de archivos
export const DifferentFileTypes: Story = {
  args: {
    files: [
      createMockFile('documento.pdf', 'application/pdf', 1024576), // 1MB
      createMockFile('imagen.jpg', 'image/jpeg', 2048576), // 2MB
      createMockFile('archivo.zip', 'application/zip', 5120000), // 5MB
      createMockFile('presentacion.pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 3072576), // 3MB
    ],
  },
  render: (args) => (
    <div className="w-[400px]">
      <FileList {...args} />
    </div>
  ),
};
