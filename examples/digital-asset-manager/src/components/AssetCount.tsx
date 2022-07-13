const AssetCount = ({ count }: { count: number }) => {
  let ending = "items";

  if (count === 1) {
    ending = "item";
  }

  return (
    <div className="asset-count-container">
      <p className="asset-count">
        {count.toString()} {ending}
      </p>
    </div>
  );
};

export default AssetCount;
