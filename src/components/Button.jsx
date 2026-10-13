function Button({ label, onClick, variant = "primary", children }) {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition ${styles[variant]}`}
    >
      {children} {label}
    </button>
  );
}

export default Button;