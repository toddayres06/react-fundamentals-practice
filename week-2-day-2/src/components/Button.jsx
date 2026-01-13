function Button({ children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        border: "1px solid #333",
        backgroundColor: isActive ? "#333" : "#eee",
        color: isActive ? "#fff" : "#000",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}

export default Button

