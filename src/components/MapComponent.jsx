import React from "react";

const MapComponent = ({ title, data }) => {
  const departmentCounts = data.reduce((acc, row) => {
    const dept = row[2];
    acc[dept] = (acc[dept] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-lg shadow p-4 h-64 overflow-auto">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul>
        {Object.entries(departmentCounts).map(([dept, count], i) => (
          <li key={i} className="flex justify-between">
            <span>{dept}</span>
            <span className="font-bold">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapComponent;