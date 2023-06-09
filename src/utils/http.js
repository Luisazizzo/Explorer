const BASE_URL = "https://api.opentripmap.com/0.1/en/places/";
const API_KEY =
  "apikey=5ae2e3f221c38a28845f05b6336176fc208f4f2fd5196e4d60c8e188";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint + API_KEY);
  const data = await res.json();

  return data;
};

export const httpGetImage = (query) =>
  fetch(
    `https://api.qwant.com/v3/search/images?count=1&q=${query}&t=images&safesearch=1&locale=it_IT&offset=0&device=desktop`
  ).then((response) => response.json());
