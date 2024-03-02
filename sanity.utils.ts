import { createClient } from "@sanity/client";
import process from "process"; // Required to access process.env


const client = createClient({
  projectId: "lf8cn0gf",
  dataset: "production",
  apiVersion: "2023-03-04"
});

console.log("Created client with configuration:", client); // Log the client object

export default client;
