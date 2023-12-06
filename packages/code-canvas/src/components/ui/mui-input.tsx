import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const MuiInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", placeholder = "", label, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            "peer placeholder-transparent focus:placeholder-inherit focus:placeholder:text-gray-400 h-10 w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 placeholder-shown:border focus:border focus:border-primary focus:shadow-input-shadow transition-[all_.3s] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t peer-focus:before:border-l peer-focus:before:border-primary peer-focus:after:border-t peer-focus:after:border-r peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          {label}
        </label>
      </div>
    );
  }
);
MuiInput.displayName = "MuiInput";

export { MuiInput };
