export const AppButton = ({ buttonText="Далее", isDisabled, onClick }) => {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {buttonText}
    </button>
  );
};

