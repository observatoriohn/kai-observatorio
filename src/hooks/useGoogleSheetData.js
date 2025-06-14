import { useEffect, useState } from "react";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQl62L5XmFTyaCIKNG6lZ983BQkDIuRTgsrx47wqjxFofolxqbcug7-czk1EvhEAQ/pub?output=csv";

const usePublishedGoogleSheetCSV = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener el CSV");
        return res.text();
      })
      .then((csvText) => {
        const [headerLine, ...rows] = csvText.trim().split("\n");
        const headers = headerLine.split(",");

        const json = rows.map((row) => {
          const values = row.split(",");
          return headers.reduce((obj, key, i) => {
            obj[key.trim()] = values[i]?.trim() ?? "";
            return obj;
          }, {});
        });

        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar CSV:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default usePublishedGoogleSheetCSV;
