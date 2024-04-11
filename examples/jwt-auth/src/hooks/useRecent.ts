import { useCallback, useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import { fetchApi } from "../utils/fetch-api";

async function putToRecent(gif: IGif) {
  const response = await fetchApi("/api/recent", {
    method: "PUT",
    body: JSON.stringify(gif.id),
    headers: { "Content-Type": "application/json" },
  });
  const json = (await response.json()) as { recent: string[] };
  return json.recent;
}

export function useRecent(): [IGif[] | undefined, (gif: IGif) => void] {
  const [recent, setRecent] = useState<IGif[]>();

  const addRecent = useCallback(
    async (gif: IGif) => {
      const recentIds = await putToRecent(gif);

      setRecent((recent) => {
        const gifs = [...(recent ?? []), gif];
        return recentIds
          .map((id) => gifs.find((g) => g.id === id))
          .filter((g) => g) as IGif[];
      });
    },
    [setRecent],
  );

  useEffect(() => {
    (async () => {
      const response = await fetchApi("/api/recent");

      const { recent: recentIds } = (await response.json()) as {
        recent: string[];
      };

      if (recentIds.length === 0) {
        setRecent([]);
        return;
      }

      const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY!);
      const gifsResult = await gf.gifs(recentIds);

      setRecent(gifsResult.data);
    })();
  }, []);

  return [recent, addRecent];
}
