import axios from "axios-jsonp-pro";

const service = axios.create({
  baseURL: "http://api.douban.com",
  timeout: 10 * 1000
});

export default {
  get(url, param) {
    return service({ method: "jsonp", url: url, params: param });
  }
};
