import React, { useContext } from "react";
import usePublishedGoogleSheetCSV from "../hooks/usePublishedGoogleSheetCSV"; // ajusta la ruta si está en otro lugar
import DashboardCard from "./DashboardCard";
import BarChartComponent from "./BarChartComponent";
import TableComponent from "./TableComponent";
import FilterContext from "../context/FilterContext";

const RefugeesAssistanceDashboard = () => {
  const { data, loading, error } = usePublishedGoogleSheetCSV();
  const { filters } = useContext(FilterContext);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No hay datos</p>;

  const headers = data[0];
  let rows = data.slice(1);

  if (filters.year) {
    rows = rows.filter(row => row[0]?.includes(filters.year));
  }

  const chartData = rows.map(row => ({
    name: row[0],
    total: parseInt(row[1]) || 0
  }));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Asistencia a Refugiados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Por País de Destino">
          <BarChartComponent data={chartData} xAxisKey="name" yAxisKey="total" />
        </DashboardCard>
        <DashboardCard title="Motivos de Migración">
          <TableComponent columns={headers} rows={rows} />
        </DashboardCard>
      </div>
    </div>
  );
};

export default RefugeesAssistanceDashboard;
