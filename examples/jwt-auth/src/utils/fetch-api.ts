"use client";

export async function fetchApi(
  url: string,
  init?: RequestInit,
): Promise<Response> {
  const token = await miro.board.getIdToken();

  return fetch(url, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}
