import { useEffect, useState } from "react";

import CategoryRow from "./CategoryRow";
import LearnMore from "./LearnMore";
import Loader from "./Loader";
import { filteredCategories } from "../constants";

interface CategoryData {
  name: string;
  id: string;
}

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [bynderCollectionNames, setBynderCollectionNames] = useState<
    CategoryData[]
  >([]);

  const listBynderCollections = async () => {
    try {
      await fetch(`/.netlify/functions/authorize`);

      const collectionsData = await fetch(`/.netlify/functions/collections`);

      const result = await collectionsData.json();

      setBynderCollectionNames([...result.collections]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    listBynderCollections();
  }, []);

  return (
    <div className="categories-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          {bynderCollectionNames
            .filter((collection) => {
              return !filteredCategories.includes(collection.name);
            })
            .map((category, index, originalArray) => (
              <CategoryRow
                name={category.name}
                collectionId={category.id}
                key={index}
                lastItem={index === originalArray.length - 1}
              />
            ))}
          <LearnMore />
        </>
      )}
    </div>
  );
};

export default Categories;
