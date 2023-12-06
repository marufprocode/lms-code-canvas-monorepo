import Link from "next/link";

export default function StaticUiAside() {
  return (
    <div className="h-full lg:flex hidden w-[40%] xl:w-[35%] 2xl:w-[40%] justify-end items-center">
      <div
        style={{
          background: `linear-gradient(190deg, rgba(0, 0, 0, 0.00) 11.6%, rgba(0, 0, 0, 0.93) 76.78%), url('/images/onboard.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative h-full flex flex-col justify-center pl-[30px] w-full pr-[68px]"
      >
        <div className="max-w-lg">
          <h4 className="text-[#F0F7FF] pr-[20px] text-[32px] font-bold">
            Get the best invoice experience with a flow !
          </h4>
          <p className="mt-[15px] text-white text-base font-medium">
            Automatic invoice processing tools usually include detailed
            reporting and analytics features.
          </p>
        </div>
        <div className="absolute bottom-[65.5px] left-[30px]">
          <p className="text-[#F0F7FF] text-sm font-medium">
            Already have an account ?{" "}
            <Link
              href="/login"
              className="cursor-pointer ml-[5px] font-semibold text-[16px] hover:text-[#138EFF]"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
