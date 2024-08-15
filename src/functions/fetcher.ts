export const fetcher = async (url: string, params?: object) => {
  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const fetchPost = async (url: string, params?: object) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((res) => res.json())
  .then((data) => {console.log(data)}).catch((err) => console.log(err));
  ;

}