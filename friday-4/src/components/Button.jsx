function Button({
  children,
  // 🟢 NEW: semantic boolean prop
  isActive = false,
  disabled = false,
  type = "button",
  onClick
}) {
  // 🟢 NEW: styles derived from meaning
  const buttonStyle = {
    backgroundColor: isActive ? "blue" : "gray",
    color: "white",
    padding: "10px 16px",
    marginRight: "8px",
    border: "none",
    borderRadius: "6px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.7 : 1
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={buttonStyle}   
    >
      {children}
    </button>
  )
}

export default Button
