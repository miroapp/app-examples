import Input from "./Input";
import { toTitleCase } from "utils";

const AssetViewHeader = ({
  handleInputChange,
  title,
}: {
  handleInputChange: (value: string) => void;
  title: string;
}) => {
  const headerTitle = toTitleCase(title);

  return (
    <>
      <Input
        backButton={true}
        handleInputChange={(value) => handleInputChange(value)}
      />
      <div className="asset-view-header">
        <p className="asset-view-header-title">{headerTitle}</p>
      </div>
    </>
  );
};

export default AssetViewHeader;
