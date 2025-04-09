import style from './progressBar.module.css';

export const ProgressBar = ({
  start,
  end,
  current,
}: {
  start: number;
  end: number;
  current: number;
}) => {
  const percentage = ((current - start) / (end - start)) * 100;

  return (
    <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200">
      <div
        className={`absolute left-0 top-0 h-full rounded-full ${
          percentage < 50 ? style['progress-no-check'] : style['progress-check']
        }`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      ></div>
      <div className="absolute inset-0 flex items-center px-2">
        <span className="z-10 text-sm font-medium text-gray-900">
          {current.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
