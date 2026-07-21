import { useEffect, useState } from "react";

const useWorkData = () => {
    const [workData, setworkData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cantidadWorks, setCantidadWorks] = useState(5); // Estado para controlar la cantidad de Pokémon a cargar

    //funcion para obtener el id del trabajo a partir de su url que nos da la API
    const getWorkId = (WorkURL) => {
        return WorkURL.split("/").filter(Boolean).pop();
    };

    //funcion para obtener la descripcion del pokemon a partir de su id
    const getWorkDescription = async (id) => {
        // usamos el endpoint de species porque ahi viene la descripcion corta del pokemon
        const response = await fetch(
            `https://retoolapi.dev/GH2lvb/dataMovil/${id}`,
        );
        const data = await response.json();

        // intentamos traer primero la descripcion en español y si no existe usamos ingles
        const flavorTextEntry =
            data.flavor_text_entries.find((entry) => entry.language.name === "es") ||
            data.flavor_text_entries.find((entry) => entry.language.name === "en");

        return flavorTextEntry
            ? flavorTextEntry.flavor_text.replace(/\f|\n|\r/g, " ").trim()
            : "Descripción no disponible.";
    };

    //funcion para obtener los datos de los trabajos desde la API
    const fetchWorkData = async () => {
        try {
            const response = await fetch(
                `https://retoolapi.dev/GH2lvb/dataMovil?_limit=${cantidadWorks}`,
            );
            const data = await response.json();

            const workWithDetails = await Promise.all(
                data.results.map(async (dataMovil) => {
                    const workId = getWorkId(dataMovil.url);
                    const work = await getWorkDescription(workId);

                    return {
                        ...dataMovil,
                        name,
                        work,
                    };
                }),
            );

            setworkData(workWithDetails);
        } catch (error) {
            console.error("Error fetching work data: here", error);
        } finally {
            setLoading(false);
        }
    };

    const loadMoreWork = () => {
        setLoading(true); // Establecemos el estado de carga en true mientras obtenemos los datos
        setCantidadWorks((prevCantidad) => prevCantidad + 5);
    };

    useEffect(() => {
        fetchWorkData();
    }, [cantidadWorks]);

    return { workData, loading, loadMoreWork };
};

export default useWorkData;