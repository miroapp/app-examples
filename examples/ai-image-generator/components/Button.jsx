const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cs1 ce12 button button-primary"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
