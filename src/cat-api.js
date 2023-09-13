import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_1OhZbgVCeksHG2elZQfmONRKYCU8MoSXF8s1Kd7jNHbyFE8A5Y5sXWRCz2OxkYgS";

export function fetchBreeds() {
  const BASE_URL = "https://api.thecatapi.com/v1/breeds";
  const url = `${BASE_URL}`;
  return axios
    .get(url)
    .then((response) => {
      if (!response.ok) {
        return response.data;
      } else {
        throw new Error(`Кот не найден (${response.status})`);
      }
    })
}


export const fetchCatByBreed = (selectedAnimal) => {
  const catBaseUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedAnimal}`;
  return axios
    .get(catBaseUrl)
    .then((response) => {
      if (!response.ok) {
        return response.data;
      } else {
        throw new Error(`Кот не найден (${response.status})`);
      }
    })

};
