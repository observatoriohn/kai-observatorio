import React, { useContext } from "react";
import FilterContext from "../context/FilterContext";

const FilterBar = () => {
  const { filters, updateFilter } = useContext(FilterContext);

  const departments = ["Francisco Morazán", "Cortés", "Choluteca", "Atlántida", "Comayagua"];
  const municipalitiesByDept = {
    "Francisco Morazán": ["Tegucigalpa", "La Masica"],
    Cortés: ["San Pedro Sula", "Choloma"],
    Choluteca: ["Choluteca"],
    Atlántida: ["La Ceiba"],
    Comayagua: ["Comayagua"]
  };
  const ages = ["18-30", "31-40", "41-50", "51+", "Indeterminado"];
  const genders = ["Lesbiana", "Gay", "Trans", "Bisexual", "Intersexual", "Indeterminado"];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">Filtrar Datos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <select name="year" value={filters.year} onChange={(e) => updateFilter(e.target.name, e.target.value)} className="border border-gray-300 rounded p-2">
          <option value="">Todos los años</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>

        <select name="department" value={filters.department} onChange={(e) => updateFilter(e.target.name, e.target.value)} className="border border-gray-300 rounded p-2">
          <option value="">Departamento</option>
          {departments.map((d, i) => <option key={i} value={d}>{d}</option>)}
        </select>

        <select name="municipality" value={filters.municipality} onChange={(e) => updateFilter(e.target.name, e.target.value)} className="border border-gray-300 rounded p-2">
          <option value="">Municipio</option>
          {filters.department &&
            municipalitiesByDept[filters.department]?.map((m, i) => <option key={i} value={m}>{m}</option>)
          }
        </select>

        <select name="age" value={filters.age} onChange={(e) => updateFilter(e.target.name, e.target.value)} className="border border-gray-300 rounded p-2">
          <option value="">Rango de Edad</option>
          {ages.map((a, i) => <option key={i} value={a}>{a}</option>)}
        </select>

        <select name="gender" value={filters.gender} onChange={(e) => updateFilter(e.target.name, e.target.value)} className="border border-gray-300 rounded p-2">
          <option value="">Población</option>
          {genders.map((g, i) => <option key={i} value={g}>{g}</option>)}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
