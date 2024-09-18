import { Size } from "@/types";

const URL = ` ${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;
// This code defines an asynchronous function that fetches a list of categories from an API using the URL constructed with an environment variable. The fetched data is returned as an array of Category objects, which ensures type safety in a TypeScript project.
