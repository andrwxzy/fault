interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const variants = {
    primary:
      "py-3 cursor-pointer bg-black text-white hover:opacity-50 duration-300",
    secondary:
      "py-3 bg-white text-black hover:bg-gray-200 duration-300 border border-gray-200",
  };
  return (
    <button onClick={onClick} className={`${variants[variant]}`}>
      {children}
    </button>
  );
}
