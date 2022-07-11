import Input from "./Input";

const AssetViewHeader = ({
  handleInputChange,
  title,
}: {
  handleInputChange: (value: string) => void;
  title: string;
}) => {
  const headerTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      <Input
        backButton={true}
        handleInputChange={(value) => handleInputChange(value)}
      />
      <div className={"asset-view-header"}>
        <p className={"asset-view-header-title"}>{headerTitle}</p>
      </div>
    </>
  );
};

export default AssetViewHeader;
