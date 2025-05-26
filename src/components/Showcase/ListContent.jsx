import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProjectModal from "../ProjectModal/ProjectModal";
import { ItemContent } from "./ItemContent";
import styles from "./Showcase.module.css";
// // pasarlo como env
// const url = "https://hernan-99.github.io/data-portfolio/data/data.json";

// //ListContent usa type para acceder a data[type]:
// export const ListContent = ({ type }) => {
//   const { data, loading, error } = useFetch(url);

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error.statusText}</p>;
//   if (!data) return <p>No hay datos disponibles</p>;

//   const items = data[type] || []; // data[type] seria equivalente a data.projects o data,blogs (depende lo que le pasemos al type del showcase en el main como prop)
//   /*
//   data[type] permite acceder dinámicamente a data.projects o data.blogs.

//   seria como hacer
//   data.projects
//   data.blogs
//   */

//   return (
//     <ul className={`${styles.listContent}`}>
//       {items.map((el) => (
//         <ItemContent key={el.id} data={el} />
//       ))}
//     </ul>
//   );
// };

export const ListContent = ({ type }) => {
  const { data, loading, error } = useFetch(
    "https://hernan-99.github.io/data-portfolio/data/data.json"
  );
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.statusText}</p>;
  if (!data) return <p>No hay datos disponibles</p>;

  const items = data[type] || [];

  return (
    <>
      <ul className={styles.listContent}>
        {items.map((el) => (
          <ItemContent
            key={el.id}
            data={el}
            onClick={() => setSelectedCategory(el)}
          />
        ))}
      </ul>

      <ProjectModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </>
  );
};
