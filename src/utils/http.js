const BASE_URL = "https://api.musement.com/api/v3/";

export const GET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}.json`);
  const data = await res.json();

  return data;
};
