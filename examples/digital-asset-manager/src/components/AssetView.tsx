import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import AssetViewHeader from "./AssetViewHeader";
import Assets from "./Assets";

const AssetView = () => {
  const { collectionId } = useParams();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [assetName, setAssetName] = useState("");

  useEffect(() => {
    setAssetName(location.state.name);
  }, [location]);

  return (
    <div id={"asset-view-container"}>
      <AssetViewHeader
        handleInputChange={(value) => setSearchTerm(value)}
        title={assetName}
      />

      <Assets searchTerm={searchTerm} collectionId={collectionId as string} />
    </div>
  );
};

export default AssetView;
