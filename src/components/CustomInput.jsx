// hooks
import { useEffect, useState } from 'react';

// components
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function CustomInput({
  type = 'text',
  name,
  placeholder,
  inputStyles = '',
  error,
  onChange: handleChange = () => { },
  autoComplete = 'off',
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const inputElement = document.getElementById(`${name}_custom_input`);
    if (inputElement) {
      if (error) {
        inputElement.classList.add('custom-input-error');
      } else {
        inputElement.classList.remove('custom-input-error');
      }
    }
  }, [error]);

  return (
    <div className="relative flex items-center">
      <input
        autoComplete={autoComplete}
        id={name && `${name}_custom_input`}
        {...{
          type: show ? 'text' : type,
          name,
          placeholder,

          onChange: (e) => {
            handleChange(e);
          },
        }}
        className={`custom-input ${inputStyles}`}
      />
      {(name === 'password' || name === 'password-check') && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-5"
        >
          {show ? (
            <AiFillEyeInvisible size={25} color="#548bff" />
          ) : (
            <AiFillEye size={25} color="#548bff" />
          )}
        </button>
      )}
    </div>
  );
}
