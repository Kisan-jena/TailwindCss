import React from 'react';

const Page = () => {
  return (
    <div className="relative bg-blue-900 text-white p-6 h-40">
      <p className="mb-4">Static parent</p>

      {/* Absolute child inside static parent */}
      <div className="absolute bottom-0 left-0 bg-blue-500 text-white px-4 py-2 rounded-lg">
        <p>Absolute child</p>
      </div>
    </div>
  );
};

export default Page;
