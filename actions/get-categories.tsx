import { Category } from "@/types";

//? categories is appended to the NEXT_PUBLIC_API_URL to form the full URL for fetching the categories.
const URL = ` ${process.env.NEXT_PUBLIC_API_URL}/categories`;
//? res.json() parses the response as JSON and returns the data. Since the function returns a Promise<Category[]>, the data is expected to be an array of Category objects.
const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  //? sends a GET request to the URL, which is the endpoint for fetching categories.
  return res.json();
};

export default getCategories;
// This code defines an asynchronous function that fetches a list of categories from an API using the URL constructed with an environment variable. The fetched data is returned as an array of Category objects, which ensures type safety in a TypeScript project.
