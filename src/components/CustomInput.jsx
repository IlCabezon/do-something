// hooks
import { useEffect, useState } from 'react';

// components
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import CustomButton from './CustomButton';

export default function CustomInput({
  type = 'text',
  name,
  placeholder,
  inputStyles = '',
  error,
  onChange: handleChange = () => {},
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
        <CustomButton
          onClick={() => setShow(!show)}
          containerStyles="absolute right-0"
        >
          {show ? (
            <AiFillEyeInvisible size={25} color="#548bff" />
          ) : (
            <AiFillEye size={25} color="#548bff" />
          )}
        </CustomButton>
      )}
    </div>
  );
}
