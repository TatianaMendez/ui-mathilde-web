import { SpinnerProps } from './spinner.types';

export const Spinner = ({ description = '' }: SpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="https://ftp.mathilde-ads.com/151-82821df9d4f7bd2662418d3147880fba.svg"
        // src="https://ftp.mathilde-ads.com/151-0c0b590b000c007c2f29c97e751d726a.gif" className='w-56'
        alt={description.replace(/<[^>]*>/g, '')}
      />
      {description && (
        <p
          className="text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default Spinner;
