import React from "react";

const TableComponent = ({ columns, rows }) => {
  return (
    <table className="min-w-full table-auto text-sm">
      <thead>
        <tr className="bg-gray-100 text-left">
          {columns.map((col, i) => <th key={i} className="py-2 px-4 font-semibold">{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            {row.map((cell, j) => <td key={j} className="py-2 px-4">{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;