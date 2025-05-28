import { ItemContent } from "./ItemContent";
import styles from "./Showcase.module.css";

export const ListContent = ({ type, data, onSelect }) => {
  return (
    <ul className={styles.listContent}>
      {type === "develop" &&
        data.map((category) => (
          <ItemContent
            key={category.id}
            data={category}
            onClick={() => onSelect(category)}
          />
        ))}

      {type === "designs" &&
        data.map((design, i) => (
          <ItemContent key={i} data={design} onClick={() => onSelect(design)} />
        ))}
    </ul>
  );
};
