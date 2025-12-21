import React from 'react';

const Arrow = () => {
  return (
    <svg width="16" height="16" fill="none">
      <path
        stroke="#1E1F25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.5}
        strokeWidth={1.25}
        d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
      />
    </svg>
  );
};

export default Arrow;
