import { useEffect, useState } from "react";

// Reemplaza con tu ID de Google Sheet
const SHEET_ID = "1RUfBXyXllnau6CjIk7h1YZFEXVIpVESJ";
const API_KEY = ""; // Deja vacío si es público

const useGoogleSheetData = (sheetName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}?key=${API_KEY}`
        );

        if (!response.ok) throw new Error("Error al cargar datos");

        const result = await response.json();
        setData(result.values);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [sheetName]);

  return { data, loading, error };
};

export default useGoogleSheetData;