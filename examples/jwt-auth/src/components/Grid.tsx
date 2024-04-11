import { Grid as GiphyGrid } from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";
import { ComponentProps, SyntheticEvent, useCallback, useState } from "react";
import { IGif } from "@giphy/js-types";

export type GridProps = {
  onSelect: (gif: IGif) => void;
} & Pick<ComponentProps<typeof GiphyGrid>, "fetchGifs">;

export function Grid({ fetchGifs, onSelect }: GridProps) {
  const [width, setWidth] = useState(320);

  const handleClick = useCallback(
    (gif: IGif, e: SyntheticEvent) => {
      e.preventDefault();
      onSelect?.(gif);
    },
    [onSelect],
  );

  return (
    <>
      <GiphyGrid
        fetchGifs={fetchGifs}
        columns={2}
        width={width}
        onGifClick={handleClick}
      />
      <ResizeObserver onResize={({ width }) => setWidth(width)} />
    </>
  );
}
