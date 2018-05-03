import axios from "axios";

const service = axios.create({
  baseURL: "http://api.douban.com",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

//请求拦截
service.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

//响应拦截

service.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    return Promise.reject(err);
  }
);

function checkStatus(response) {
  if (response.status === 200 || response.status === 304) {
    return response;
  }
  return {
    data: {
      code: -404,
      message: response.statusText,
      data: response.statusText
    }
  };
}

function checkCode(res) {
  if (res.status === -404) {
    console.log(res.msg);
  }
  return res;
}

export default {
  get(url, param) {
    return axios({
      method: "get",
      url: url,
      params: param
    })
      .then(response => {
        return checkStatus(response);
      })
      .then(res => {
        return checkCode(res);
      });
  },
  post(url, param) {
    return axios({
      method: "post",
      url: url,
      params: param
    })
      .then(response => {
        return checkStatus(response);
      })
      .then(res => {
        return checkCode(res);
      });
  }
};
