import axiosInstance from "../../helpers/axiosInterceptor";

export const loadCredentials = async (memberId, password) => {
  const { data } = await axiosInstance.post("login", {
    memberId,
    password,
  });
  return data;
};
