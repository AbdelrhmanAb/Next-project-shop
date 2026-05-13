export interface Tpost {
  id: number;
  title: string;
  body: string;
  [key: string]: unknown;
}

export const postsList = async (): Promise<Tpost[]> => {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 8000);

  try {
    const res = await fetch(
      "https://dummyjson.com/posts",
      {
        cache: "no-store",
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);
    const postsRES = await res.json();

    return postsRES.posts;
  } catch (err) {
    console.log("Fetch failed:", err);
    throw new Error(`Fetch failed: ${err}`);
  }
};