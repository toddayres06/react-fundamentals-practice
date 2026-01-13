function Button({ onClick, type = "button", isActive, children }) {
  const baseStyle = {
    padding: "6px 10px",
    margin: "4px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    cursor: "pointer",
  }

  const activeStyle = isActive
    ? { backgroundColor: "green", color: "white" }
    : { backgroundColor: "white", color: "black" }

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...baseStyle, ...activeStyle }}
    >
      {children}
    </button>
  )
}

export default Button