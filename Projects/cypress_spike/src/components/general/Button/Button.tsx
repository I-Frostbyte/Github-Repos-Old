import React from "react";

type Props = {
  btnText: string;
  onClick?: any;
  customStyles?: string;
  idValue: string;
};

const Button = ({ btnText, onClick, customStyles, idValue }: Props) => {
  return (
    <button
      type="button"
      onClick={() => onClick && onClick()}
      className={`py-2.5 w-full text-center rounded-lg active:scale-[0.99] transition-all duration-300 ${customStyles}`}
      id={idValue}
    >
      {btnText}
    </button>
  );
};

export default Button;
