import React from "react";

const CustomButton = ({ btnText = "Button" }) => {
  return <button data-text={btnText} className="btn-offset font-medium m-2"></button>;
};

export default CustomButton;
