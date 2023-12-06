"use client";
import Form from "@/components/forms/custom-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { IloginForm, loginFormResolver } from "../_schemas/login.schema";
import FormInput from "@/components/forms/form-input";
import { useLoginMutation } from "@/services/auth/auth.services";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginForm() {
  const { mutate, isSuccess, isError, data, error, isPending } = useLoginMutation();
  const router = useRouter();

  useEffect(()=>{
    if(isSuccess && data?.status){
      router.push('/dashboard')
    }
    if(isError && error){
      toast.error(error?.message || "Login Failed! Try Again",)
    }
  },[data?.status, error, isError, isSuccess, router])

  const handleLogin = (values: IloginForm) => {
    mutate(values);
  };
  
  return (
    <div className="flex items-center justify-center flex-1 w-full grow">
      <div className="w-full p-10 shadow-none sm:shadow-md lg:shadow-none lg:p-0 sm:max-w-md md:max-w-lg">
        <h4 className="text-4xl font-bold text-center text-text-1 lg:text-start mb-7">
          Log In
        </h4>
        <Form
          submitHandler={handleLogin}
          resolver={loginFormResolver}
          className="w-full"
        >
          <FormInput name="email" type="email" placeholder="Email" autoFocus />
          <FormInput name="password" type="password" placeholder="Password" />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <Link href="/recover-password">
              <p className="text-sm">Forget password</p>
            </Link>
          </div>
          <Button className="w-full" type="submit" loading={isPending}>Sign In</Button>
          <p className="text-sm font-normal text-center lg:hidden">
            Do not have an account?{" "}
            <Link href="/signup" className="font-medium text-primary ">
              Sign Up
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
