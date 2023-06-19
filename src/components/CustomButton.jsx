export default function CustomButton({
  btnType = 'button',
  containerStyles,
  isDisabled = false,
  children,
}) {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`group custom-btn ${containerStyles}`}
    >
      {children}
    </button>
  );
}
