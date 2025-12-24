import React from "react";

const CustomButton = ({ btnText = "Button", btnType = "button" }) => {
  return <button type={btnType} data-text={btnText} className="btn-offset font-medium m-2"></button>;
};

export default CustomButton;
