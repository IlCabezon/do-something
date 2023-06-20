export default function CustomButton({
  btnType = 'button',
  containerStyles,
  isDisabled = false,
  onClick,
  children,
}) {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      onClick={onClick}
      className={`group custom-btn ${containerStyles}`}
    >
      {children}
    </button>
  );
}
