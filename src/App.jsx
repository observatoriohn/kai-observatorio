//import React, { useState } from "react";
import Header from "./components/Header";
import PillarNavigation from "./components/PillarNavigation";
import ViolentDeathsDashboard from "./components/ViolentDeathsDashboard";
import GeneralizedViolenceDashboard from "./components/GeneralizedViolenceDashboard";
import MissingPersonsDashboard from "./components/MissingPersonsDashboard";
import RefugeesAssistanceDashboard from "./components/RefugeesAssistanceDashboard";
import DataExplorer from "./components/DataExplorer";
import {FilterProvider} from "./context/FilterContext";

function App() {
  const [activeTab, setActiveTab] = useState("pillars");
  const [activePillar, setActivePillar] = useState("violentDeaths");

  return (
    <FilterProvider>
      <div className="bg-gray-100 min-h-screen">
        <Header setActiveTab={setActiveTab} />
        <main className="container mx-auto py-8 px-4">
          {activeTab === "pillars" && (
            <>
              <PillarNavigation activePillar={activePillar} setActivePillar={setActivePillar} />
              <div className="mt-6">
                {activePillar === "violentDeaths" && <ViolentDeathsDashboard />}
                {activePillar === "generalizedViolence" && <GeneralizedViolenceDashboard />}
                {activePillar === "missingPersons" && <MissingPersonsDashboard />}
                {activePillar === "refugeesAssistance" && <RefugeesAssistanceDashboard />}
              </div>
            </>
          )}
          {activeTab === "dataExplorer" && <DataExplorer />}
        </main>
        <footer className="bg-gray-800 text-white p-6 text-center">
          <p>Observatorio de Violencia Hacia las Personas LGBTI+ de Honduras KAI+</p>
          <p>&copy; 2025 Todos los derechos reservados.</p>
        </footer>
      </div>
    </FilterProvider>
  );
}

export default App;
