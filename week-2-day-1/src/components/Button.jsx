function Button({ children, isActive, onClick }) {
  // Conditional styling based on isActive
  const style = {
    backgroundColor: isActive ? "blue" : "grey",
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default Button;
