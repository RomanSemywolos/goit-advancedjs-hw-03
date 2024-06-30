import axios from "axios";

export function fetchBreeds() {
  axios.defaults.headers.common["x-api-key"] = "live_dFTSYM4XPRHVzFZoPyPBGLELAJnCFAEFP3dblha5UWWcBVqsJm8HcOpsSmkXjIC9";
  return axios({
    method: 'get',
    url: 'https://api.thecatapi.com/v1/breeds',
    responseType: 'json',
  });
}

export function fetchCatByBreed(breedId)  {
  axios.defaults.headers.common["x-api-key"] = "live_dFTSYM4XPRHVzFZoPyPBGLELAJnCFAEFP3dblha5UWWcBVqsJm8HcOpsSmkXjIC9";
  let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios({
    method: 'get',
    url,
    responseType: 'json',
  });
}