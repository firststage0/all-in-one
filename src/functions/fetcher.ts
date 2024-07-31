export const fetcher = async (url: string) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};
