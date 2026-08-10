import axios from "axios";

const API = axios.create({
  baseURL: "https://citizens-discrete-detail-coating.trycloudflare.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const deployRepository = async (repositoryUrl) => {
  const response = await API.post("/deploy", {
    repositoryUrl,
  });

  return response.data;
};