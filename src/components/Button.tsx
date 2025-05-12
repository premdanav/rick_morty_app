type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className="bg-portalGreen hover:bg-toxicGreen text-spaceGray font-rick px-4 py-2 rounded transition"
  >
    {text}
  </button>
);
export default Button;
