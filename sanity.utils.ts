import { createClient } from "@sanity/client";
import process from "process"; // Required to access process.env


const client = createClient({
  projectId: "lf8cn0gf",
  dataset: "production",
  apiVersion: "2024-02-19"
});

console.log("Created client with configuration:", client); // Log the client object

export default client;
