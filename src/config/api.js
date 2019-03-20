import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://online.otto-schmidt.de/db/SinaiResFrag/',
  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000, // default is `0` (no timeout)
  // `headers` are custom headers to be sent
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default
  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret',
  },
});

// Alter defaults after instance has been created
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default instance;
