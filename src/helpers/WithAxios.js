import { useContext, useMemo } from "react";
import { AppContext } from "../context/Provider";
import axiosInstance from "../helpers/axiosInterceptor";

const WithAxios = ({ children }) => {
  const {
    authState: { data },
  } = useContext(AppContext);

  useMemo(() => {
    axiosInstance.interceptors.request.use(
      (config) => {
        if (data.token) {
          config.headers.Authorization = `Bearer ${data.token}`;
        } else {
          delete axiosInstance.defaults.headers.common["Authorization"];
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }, [data]);

  return children;
};

export default WithAxios;
