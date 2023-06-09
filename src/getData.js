import axios from 'axios';

const getData = (url) => axios.get(url)
  .then((res) => res.data)
  .catch((err) => {
    throw new Error(err);
  });

export default getData;
