"use client";

import { IGif } from "@giphy/js-types";
import { GifsResult } from "@giphy/js-fetch-api";
import { useCallback } from "react";
import { createImage } from "../utils/miro";
import { useRecent } from "../hooks/useRecent";
import { Search } from "./Search";
import { Grid } from "./Grid";

function createGifsResult(recent: IGif[]): Promise<GifsResult> {
  return Promise.resolve({
    data: recent,
    pagination: {
      total_count: recent.length,
      count: recent.length,
      offset: 0,
    },
    meta: {
      status: 200,
      msg: "OK",
      response_id: "1",
    },
  });
}

export function RecentGifs() {
  const [recent, addRecent] = useRecent();

  const handleSelectedGif = useCallback(
    async (gif: IGif) => {
      await createImage(gif);
      addRecent(gif);
    },
    [addRecent],
  );

  if (!recent) return <p>Loading...</p>;

  const fetchGifs = () => createGifsResult(recent);
  const recentKey = recent.map((gif) => gif.id).join(",");

  return (
    <div className="grid">
      <div className="cs1 ce12">
        <h4>Recent gifs:</h4>
        {recent.length === 0 ? (
          <p>No recent GIFs. Try search below to add some!</p>
        ) : (
          <Grid
            key={recentKey}
            fetchGifs={fetchGifs}
            onSelect={handleSelectedGif}
          />
        )}
      </div>

      <div className="cs1 ce12">
        <h4>Search for more gifs:</h4>
        <Search onSelect={handleSelectedGif} />
      </div>
    </div>
  );
}
