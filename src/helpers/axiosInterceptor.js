import axios from "axios";

let headers = {};

const axiosInstance = axios.create({
  baseURL: "http://rn-bootcamp2021.mocklab.io/v1/",
  headers,
});

export default axiosInstance;
