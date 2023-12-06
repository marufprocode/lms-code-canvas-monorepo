"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Email is Required").min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const loginFormResolver = zodResolver(loginFormSchema);

export type IloginForm = z.infer<typeof loginFormSchema>
