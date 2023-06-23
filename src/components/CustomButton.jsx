// native
import { useState, useEffect } from 'react';

export default function CustomButton({
  name,
  btnType = 'button',
  containerStyles,
  cssStyles,
  isDisabled = false,
  onClick,
  children,
}) {
  const [loading, setLoading] = useState(false);

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
      onClick={() => {
        setLoading(true);
        onClick();
        setLoading(false);
      }}
      className={`group custom-btn ${containerStyles}`}
      style={cssStyles || {}}
    >
      {loading ? <p>cargando</p> : children }
    </button>
  );
}
