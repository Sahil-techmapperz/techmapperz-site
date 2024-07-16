'use client';

import React from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const PaginationButtons = ({ page, totalPages }) => {
  const handlePreviousPage = () => {
    console.log(page);
    if (page > 1) {
      window.location.href = `/article/?page=${page - 1}`;
    }
  };

  const handleNextPage = () => {
    console.log(page);
    if (page < totalPages) {
      window.location.href = `/article/?page=${page + 1}`;
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button disabled={page === 1} onClick={handlePreviousPage} className="p-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400">
        <AiOutlineLeft />
      </button>
      <div>{page} of {totalPages}</div>
      <button onClick={handleNextPage} disabled={page === totalPages} className="p-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400">
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default PaginationButtons;
