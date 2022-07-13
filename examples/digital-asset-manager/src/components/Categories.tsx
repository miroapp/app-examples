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

  const listBynderCollections = () => {
    fetch(`/.netlify/functions/authorize`).then(() => {
      fetch(`/.netlify/functions/collections`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setBynderCollectionNames([...result.collections]);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  useEffect(() => {
    setBynderCollectionNames([]);
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
            .map((category, index, originalArray) => {
              return (
                <CategoryRow
                  name={category.name}
                  collectionId={category.id}
                  key={index}
                  lastItem={index === originalArray.length - 1}
                />
              );
            })}
          <LearnMore />
        </>
      )}
    </div>
  );
};

export default Categories;
