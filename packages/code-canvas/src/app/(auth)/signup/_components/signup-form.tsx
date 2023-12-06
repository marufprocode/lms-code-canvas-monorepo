import Form from "@/components/forms/custom-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignupForm() {
  const handleSignUp = async () => {
    "use server"
  }
  return (
    <div className="flex items-center justify-center flex-1 w-full grow">
      <div className="w-full p-10 shadow-none sm:shadow-md lg:shadow-none lg:p-0 sm:max-w-md md:max-w-lg">
        <h4 className="text-4xl font-bold text-center text-text-1 lg:text-start mb-7">
          Sign Up
        </h4>

        <Form submitHandler={handleSignUp}>
          {/* <p className={`py-2.5 text-[#747474] text-sm font-semibold }`}>
              Add details to sign up
            </p> */}
          <div className="mb-2.5 flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-[16px]">
              <Input required placeholder="Company Name" name="name" />
            </div>
            <div className="grid md:grid-cols-2 gap-[16px]">
              <Input required placeholder="Fist Name" name="first_name" />
              <Input required placeholder="Last Name" name="last_name" />
            </div>
            <Input required type="email" placeholder="Email" name="email" />
            <Input
              required
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="agreedToTerms" />
            <Label htmlFor="agreedToTerms">
              <p className="flex items-center text-xs text-[#747474] font-semibold ">
                I agree with the
                <a
                  href="#"
                  className="font-semibold text-xs transition-colors text-[#138EFF] underline"
                >
                  &nbsp;Terms and Conditions
                </a>
              </p>
            </Label>
          </div>
          <Button type="submit" className="w-full">Sign Up</Button>
          <p className="text-center font-semibold text-xs text-[#747474] lg:hidden pt-2">
            Already have an account?
            <Link href="/signup">
              Sign in
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
