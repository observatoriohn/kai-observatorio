import React from "react";

const Header = ({ setActiveTab }) => {
  return (
    <header className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white p-6 flex justify-between items-center shadow-md">
      <img src="/Logo KAI 2025.png" alt="KAI+ Logo" className="h-16" />
      <nav>
        <ul className="flex space-x-6 font-medium">
          <li><button onClick={() => setActiveTab("pillars")} className="hover:underline">Pilares</button></li>
          <li><button onClick={() => setActiveTab("dataExplorer")} className="hover:underline">Explorador de Datos</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;