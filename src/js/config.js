import axios from 'axios';

const Config = {
  API_URL: 'http://localhost:4000/'
};

export function callApi(method, endpoint, data=null) {
  const token = sessionStorage.getItem('jwtToken');
  let headers = null;
  if(token) {
    headers = {
      'Authorization': 'Bearer ' + token
    }
  }
  return axios({
    method: method,
    url: Config.API_URL + endpoint,
    headers: headers,
    data: data
  });
}

export default Config;
