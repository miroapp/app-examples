const AssetCount = ({ count }: { count: number }) => {
  let ending = "items";

  if (count === 1) {
    ending = "item";
  }

  return (
    <div id={"asset-count-container"}>
      <p id={"asset-count"}>
        {count.toString()} {ending}
      </p>
    </div>
  );
};

export default AssetCount;
