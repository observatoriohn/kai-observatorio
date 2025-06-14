import React, { useContext } from "react";
import useGoogleSheetData from "../hooks/useGoogleSheetData";
import FilterBar from "./FilterBar";
import TableComponent from "./TableComponent";

const DataExplorer = () => {
  const { data, loading, error } = useGoogleSheetData("Datos Generales");
  const { filters } = useContext(FilterContext);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No hay datos</p>;

  const headers = data[0];
  let rows = data.slice(1);

  if (filters.year) {
    rows = rows.filter(row => row[0]?.includes(filters.year));
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Explorador de Datos</h2>
      <FilterBar />
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <TableComponent columns={headers} rows={rows} />
      </div>
    </div>
  );
};

export default DataExplorer;