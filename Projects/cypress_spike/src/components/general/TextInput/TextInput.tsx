"use client";
import React, { ReactNode } from "react";

interface Props {
  inputValue?: string;
  setInputValue: any;
  placeholderText: string;
  label: string;
  required?: boolean;
  disable?: boolean;
  inputIcon?: ReactNode;
  showIcon?: boolean;
  type: string;
  isValid?: boolean;
  errorText?: any;
  onBlur?: any;
  onFocus?: any;
}

const TextInput = ({
  inputValue,
  setInputValue,
  placeholderText,
  label,
  required,
  disable,
  showIcon,
  inputIcon,
  isValid = true,
  type,
  errorText,
  onBlur,
  onFocus,
}: Props) => {
  return (
    <div className="relative">
      <h2 className="relative ml-2 mb-2 max-w-max">
        {required && (
          <span className="absolute -right-3 -top-1 block text-red-500">*</span>
        )}
        <span className="text-medium font-bold mx-10 text-slate-500">{label}</span>
      </h2>
      <div
        className={`relative flex w-full rounded-md ${
          showIcon ? "pl-2" : "px-2"
        }`}
      >
        <input
          type={type}
          value={inputValue}
          onChange={(value) => setInputValue(value.target.value)}
          placeholder={placeholderText}
          disabled={disable}
          required={required}
          className={`w-full bg-white mx-10 focus:ring-cyan-200 focus:ring-2 ${
            errorText
              ? "border-[var(--error-50)]"
              : "border-[var(--secondary-500)]"
          } flex-1 rounded-lg py-3 pl-3 pr-2 transition-all duration-200 placeholder:text-sm placeholder:font-light focus:outline-none focus:ring-1 ${
            !errorText ? " focus:ring-slate-800" : " focus:ring-red-500"
          } `}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {showIcon && (
          <div className=" absolute right-14 top-3 text-sm text-slate-500">
            {inputIcon}
          </div>
        )}
      </div>
      {errorText && (
        <p className="absolute -bottom-3 truncate pl-1 text-[12px] text-red-500">
          {errorText?.length > 32
            ? `${errorText?.toString().slice(0, 28).concat(".....")}`
            : `${errorText}`}
        </p>
      )}
    </div>
  );
};

export default TextInput;
