import { axiosInstance } from "@/axios";
import { LoginDto, RegisterDto } from "@/types/auth";

export const login_req = async (loginDto: LoginDto) => {
  const res = await axiosInstance.post("/auth/login", loginDto);

  return res.data;
};

export const register_req = async (register: RegisterDto) => {
  const res = await axiosInstance.post("/auth/register", register);

  return res.data;
};
