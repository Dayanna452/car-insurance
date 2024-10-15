interface InputContainerProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  label?: string;
}

export const Input = ({
  placeholder,
  className,
  ...props
}: InputContainerProps) => {
  return (
    <div className="input-container" {...props}>
      <input
        type={props.type}
        placeholder={placeholder || "placeholder"}
        className={`input ${className ? className : ""}`}
      />
    </div>
  );
};
