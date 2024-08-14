export const fetcher = async (url: string, params?: object) => {
  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};
