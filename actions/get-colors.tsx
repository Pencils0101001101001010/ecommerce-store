import { Color } from "@/types";

const URL = ` ${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getColors;
// This code defines an asynchronous function that fetches a list of categories from an API using the URL constructed with an environment variable. The fetched data is returned as an array of Category objects, which ensures type safety in a TypeScript project.
