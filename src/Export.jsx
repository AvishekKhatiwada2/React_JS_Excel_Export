// src/components/ExportButton.js
import React from 'react';
import * as XLSX from 'xlsx';

const Export = ({ data, filename = 'data.xlsx' }) => {
  const handleExport = () => {
    // Convert data to worksheet
    const ws = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and append the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Write the workbook to a file
    XLSX.writeFile(wb, filename);
  };

  return (
    <button onClick={handleExport}>Export to Excel</button>
  );
};

export default Export;
