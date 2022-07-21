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
      className="category-row-container"
      state={{ name }}
      {...(lastItem ? { style: { borderBottom: "none" } } : {})}
    >
      <p className="category-row-name">{name}</p>
      <div className="icon icon-arrow-right" />
    </Link>
  );
};

export default CategoryRow;
