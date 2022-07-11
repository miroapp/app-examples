const CatalogItem = ({
  background,
  name,
  property_extension,
}: {
  background?: JSX.Element;
  name: string;
  property_extension: string;
}) => {
  return (
    <div id={"catalog-item-container"}>
      <div className={"catalog-item-background-container"}>{background}</div>
      <div id={"filename-container"} title={name}>
        <span id={"catalog-item-name"}>{name}</span>
        <span id={"catalog-item-extension"}>.{property_extension}</span>
      </div>
    </div>
  );
};

export default CatalogItem;
