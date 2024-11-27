import { axiosInstance } from "@/axios";
import { LoginDto } from "@/types/auth";

export const login_req = async (loginDto: LoginDto) => {
  const res = await axiosInstance.post("/auth/login", loginDto);

  return res.data;
};
