import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../../helpers/axiosInterceptor";
export const useLibrariesDataLoading = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(`libraries`);
      setData(data?.libraries);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    loading,
  };
};
