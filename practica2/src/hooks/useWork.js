import { useEffect, useState } from "react";

const useWorkData = () => {
  const [workData, setWorkData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cantidadWorks, setCantidadWorks] = useState(5);

  // Función para obtener los datos de la API de trabajos
  const fetchWorkData = async () => {
    try {
      const response = await fetch(
        `https://retoolapi.dev/GH2Ivb/data?_limit=${cantidadWorks}`
      );
      const data = await response.json();

      // La API devuelve directamente un array de objetos
      // Aseguramos que cada elemento tenga al menos id, name, work, work_since
      const formattedData = data.map((item) => ({
        id: item.id,
        name: item.name || "Sin nombre",
        work: item.work || "Sin trabajo",
        work_since: item.work_since || "Fecha desconocida",
      }));

      setWorkData(formattedData);
    } catch (error) {
      console.error("Error fetching work data:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreWork = () => {
    setLoading(true);
    setCantidadWorks((prev) => prev + 5);
  };

  useEffect(() => {
    fetchWorkData();
  }, [cantidadWorks]);

  return { workData, loading, loadMoreWork };
};

export default useWorkData;