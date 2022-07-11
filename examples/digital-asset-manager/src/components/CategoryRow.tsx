import { Link } from "react-router-dom";

const CategoryRow = ({
  name,
  collectionId,
  lastItem,
}: {
  name: string;
  collectionId: string;
  lastItem: boolean;
}) => {
  const slug = name.replace(/\s/g, "").toLowerCase();

  return (
    <Link
      to={`${slug}/${collectionId}`}
      id={"category-row-container"}
      state={{ name: name }}
      style={lastItem ? { borderBottom: "none" } : {}}
    >
      <p id={"category-row-name"}>{name}</p>
      <div className="icon m2 icon-arrow-right" />
    </Link>
  );
};

export default CategoryRow;
