import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import CatalogItem from "./CatalogItem";
import AssetCount from "./AssetCount";

interface ImageData {
  name: string;
  thumbnails: {
    mini: string;
    thul: string;
    webimage: string;
  };
  property_extension: string;
}

const Assets = ({
  searchTerm,
  collectionId,
}: {
  searchTerm: string;
  collectionId: string;
}) => {
  const [loading, setLoading] = useState(true);
  const [assetUrls, setAssetUrls] = useState<ImageData[]>([]);
  const [assetCount, setAssetCount] = useState(0);

  const fetchAssetsByCollectionId = async () => {
    try {
      const collectionData = await fetch(`/.netlify/functions/collectionId`, {
        method: "POST",
        body: JSON.stringify({ collectionId }),
      });

      const result = await collectionData.json();

      setAssetUrls([...result]);
      setAssetCount(result.length);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAssetsByCollectionId();
  }, []);

  useEffect(() => {
    const filteredItemLength = assetUrls.filter((assetObject) => {
      return assetObject["name"]
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    setAssetCount(filteredItemLength.length);
  }, [searchTerm]);

  return (
    <div className="assets-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="asset-item-container">
            {assetUrls
              .filter((assetObject) => {
                return assetObject["name"]
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              })
              .map((asset, index) => {
                return (
                  <CatalogItem
                    background={
                      <img
                        src={asset.thumbnails.thul}
                        data-image={asset.thumbnails.webimage}
                        className="miro-draggable draggable-item asset-image-background"
                        draggable={false}
                      />
                    }
                    name={asset.name}
                    key={index}
                    property_extension={asset.property_extension}
                  />
                );
              })}
          </div>
          <AssetCount count={assetCount} />
        </>
      )}
    </div>
  );
};

export default React.memo(Assets);
