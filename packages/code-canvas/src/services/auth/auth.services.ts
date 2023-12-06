import { IloginForm } from "@/app/(auth)/login/_schemas/login.schema";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { ILoginResponse } from "./auth.types";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (credential:IloginForm) : Promise<ILoginResponse> => {
      return api.post("/auth/login", credential);
    },
  });
};
