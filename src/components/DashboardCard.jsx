import React from "react";

const DashboardCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 transition hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
};

export default DashboardCard;