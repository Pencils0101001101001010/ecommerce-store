import { Billboard } from "@/types";

//? billboards is appended to the NEXT_PUBLIC_API_URL to form the full URL for fetching the billboards.
const URL = ` ${process.env.NEXT_PUBLIC_API_URL}/billboards`;
//?getBillboard is an asynchronous function that takes an id (a string) as an argument. The function is designed to fetch a billboard Type by its id from the API.
const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);
  // ?The fetch function is called with the constructed URL: ${URL}/${id}. This sends a GET request to the API endpoint for the specific billboard with the given id.

  //? sends a GET request to the URL, which is the endpoint for fetching billboards.
  return res.json();
};

export default getBillboard;
// This code defines an asynchronous function that fetches a list of billboards from an API using the URL constructed with an environment variable. The fetched data is returned as an array of Billboard objects, which ensures type safety in a TypeScript project.
