// native
import { useEffect } from 'react';

export default function CustomButton({
  name,
  btnType = 'button',
  containerStyles,
  isDisabled = false,
  onClick,
  children,
}) {
  useEffect(() => {
    const buttonElement = document.getElementById(`${name}_custom_button`);
    if (buttonElement) {
      if (isDisabled) {
        buttonElement.classList.add('disabled');
      } else {
        buttonElement.classList.remove('disabled');
      }
    }
  }, [isDisabled]);

  return (
    <button
      id={name && `${name}_custom_button`}
      disabled={isDisabled}
      type={btnType}
      onClick={onClick}
      className={`group custom-btn ${containerStyles}`}
    >
      {children}
    </button>
  );
}
