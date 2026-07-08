import React from "react";

type Props = {
  btnText: string;
  onClick?: any;
  customStyles?: string;
};

const Button = ({ btnText, onClick, customStyles }: Props) => {
  return (
    <button
      type="button"
      onClick={() => onClick && onClick()}
      className={`py-2.5 w-full text-center rounded-lg active:scale-[0.99] transition-all duration-300 ${customStyles}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
