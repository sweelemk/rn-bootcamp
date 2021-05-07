import { useEffect, useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../../context/Provider";
import axiosInstance from "../../../helpers/axiosInterceptor";
export const useHistoryDataLoading = () => {
  const {
    authState: {
      data: { userId },
    },
  } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(`members/${userId}/books`);
      setData(data?.books);
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
