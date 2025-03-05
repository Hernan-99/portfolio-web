import { useFetch } from "../../hooks/useFetch";
import { ItemContent } from "./ItemContent";

const url = "https://hernan-99.github.io/data-portfolio/data/data.json";

//ListContent usa type para acceder a data[type]:
export const ListContent = ({ type }) => {
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.statusText}</p>;
  if (!data) return <p>No hay datos disponibles</p>;

  const items = data[type] || []; // data[type] seria equivalente a data.projects o data,blogs (depende lo que le pasemos al type del showcase en el main como prop)
  /*
  data[type] permite acceder dinámicamente a data.projects o data.blogs.

  seria como hacer 
  data.projects 
  data.blogs
  */

  return (
    <ul>
      {items.map((el) => (
        <ItemContent key={el.id} data={el} />
      ))}
    </ul>
  );
};
