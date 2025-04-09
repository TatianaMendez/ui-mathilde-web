import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <HiChevronLeft className="h-5 w-5" />
      </button>

      <span className="text-sm text-gray-700">
        {currentPage} de {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <HiChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};
