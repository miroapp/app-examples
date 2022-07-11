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

  const listFiles = () => {
    fetch(`/.netlify/functions/collectionId`, {
      method: "POST",
      body: JSON.stringify({ collectionId: collectionId }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setAssetUrls([...result]);
        setAssetCount(result.length);
        setLoading(false);
      });
  };

  useEffect(() => {
    listFiles();
  }, []);

  useEffect(() => {
    const filteredItemLength = assetUrls.filter((o) => {
      return o["name"].toLowerCase().includes(searchTerm.toLowerCase());
    });

    setAssetCount(filteredItemLength.length);
  }, [searchTerm]);

  return (
    <>
      <div id={"assets-container"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div id={"asset-item-container"}>
              {assetUrls
                .filter((o) => {
                  return o["name"]
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
                          id={"asset-image-background"}
                          className="miro-draggable draggable-item"
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
    </>
  );
};

export default React.memo(Assets);
