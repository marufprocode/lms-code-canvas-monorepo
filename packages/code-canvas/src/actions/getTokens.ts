"use server";
import { cookies } from "next/headers";

export const getTokens = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");
  return { accessToken, refreshToken };
};
