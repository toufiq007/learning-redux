type ButtonProps = {
  styles: string;
  handler: (id: number) => void;
  id: number;
  children: string;
};

const Button = ({ styles, handler, id, children }: ButtonProps) => {
  return (
    <div>
      <button onClick={() => handler(id)} className={styles}>
        {children}
      </button>
    </div>
  );
};

export default Button;
