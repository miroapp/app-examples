"use client";

import {
  SearchBar,
  SearchContext,
  SearchContextManager,
} from "@giphy/react-components";
import { useContext } from "react";
import { Grid, GridProps } from "./Grid";

export type SearchProps = Pick<GridProps, "onSelect">;

export function Search(props: SearchProps) {
  return (
    <SearchContextManager
      apiKey={process.env.NEXT_PUBLIC_GIPHY_API_KEY!}
      shouldDefaultToTrending={false}
      theme={{
        searchbarHeight: 20,
      }}
    >
      <Components {...props} />
    </SearchContextManager>
  );
}

function Components({ onSelect }: SearchProps) {
  const { fetchGifs, searchKey } = useContext(SearchContext);

  return (
    <>
      <SearchBar />
      <Grid key={searchKey} fetchGifs={fetchGifs} onSelect={onSelect} />
    </>
  );
}
