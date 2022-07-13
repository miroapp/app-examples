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
    <div className="catalog-item-container">
      <div className="catalog-item-background-container">{background}</div>
      <div className="filename-container" title={name}>
        <span className="catalog-item-name">{name}</span>
        <span className="catalog-item-extension">.{property_extension}</span>
      </div>
    </div>
  );
};

export default CatalogItem;
