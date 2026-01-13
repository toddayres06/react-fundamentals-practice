function Button({ children, onClick, isActive, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: isActive ? "green" : "white",
        color: isActive ? "white" : "black"
      }}
    >
      {children}
    </button>
  );
}

export default Button;
