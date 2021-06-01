import axios from "axios";

const axisoInstance = axios.create({
  timeout: 5000,
  withCredentials: true,
  responseType: "json",
});

axisoInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] =
    "Bearer " + window.localStorage.getItem("token")
      ? window.localStorage.getItem("token")
      : "";
  return config;
});

axisoInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    // todo 数据相应拦截
    return response;
  },
  (err) => {
    // todo 错误处理
    console.log("拦截错误", err);
  }
);

export default axisoInstance;
