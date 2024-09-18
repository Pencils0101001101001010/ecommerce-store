import { Product } from "@/types";
import qs from "query-string";
//? The query-string library (qs) is imported to handle the creation of query strings in a clean and readable way. This is useful for building URLs with query parameters, especially when you have multiple parameters or need to handle optional ones.

//? The Query interface defines the structure of the query object that can be passed to the getProducts function. Each field (categoryId, colorId, sizeId, and isFeatured) is optional (?), meaning the function can be called without specifying any or all of these fields.
interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
  //?   The qs.stringifyUrl function is used to generate the full URL including query parameters, if provided. It works like this:

  //?    url: URL sets the base URL.
  //?   query: { ... } contains the parameters passed to the API. If any parameter is undefined, it will be ignored in the final query string.

  //? This ensures that only the parameters which are actually provided get included in the final request URL.
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);

  return res.json();
};

export default getProducts;
// This code defines an asynchronous function that fetches a list of categories from an API using the URL constructed with an environment variable. The fetched data is returned as an array of Category objects, which ensures type safety in a TypeScript project.
