import axiosInstance from "../../helpers/axiosInterceptor";

export const loadUser = async (userId) => {
  const { data } = await axiosInstance.get(`members/${userId}`);
  return data;
};
