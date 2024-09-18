import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;
// This code defines an asynchronous function that fetches a list of billboards from an API using the URL constructed with an environment variable. The fetched data is returned as an array of Billboard objects, which ensures type safety in a TypeScript project.
