import React from "react";

const PillarNavigation = ({ activePillar, setActivePillar }) => {
  return (
    <nav className="mb-4">
      <ul className="flex flex-wrap gap-2">
        <li>
          <button
            onClick={() => setActivePillar("violentDeaths")}
            className={`px-4 py-2 rounded ${activePillar === "violentDeaths" ? "bg-blue-600" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            Muertes Violentas
          </button>
        </li>
        <li>
          <button
            onClick={() => setActivePillar("generalizedViolence")}
            className={`px-4 py-2 rounded ${activePillar === "generalizedViolence" ? "bg-green-600" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            Violencia Generalizada
          </button>
        </li>
        <li>
          <button
            onClick={() => setActivePillar("missingPersons")}
            className={`px-4 py-2 rounded ${activePillar === "missingPersons" ? "bg-yellow-600" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            Personas Desaparecidas
          </button>
        </li>
        <li>
          <button
            onClick={() => setActivePillar("refugeesAssistance")}
            className={`px-4 py-2 rounded ${activePillar === "refugeesAssistance" ? "bg-red-600" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            Asistencia a Refugiados
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PillarNavigation;