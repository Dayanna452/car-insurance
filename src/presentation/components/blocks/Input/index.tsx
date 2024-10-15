interface InputContainerProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  label?: string
}

export const Input = ({ label, className, ...props }: InputContainerProps) => {
  return (
    <div className='input-container' {...props}>
      <input
        className={`input ${className ? className : ''}`}
        type={props.type}
      />
      {label && (
        <label className='input-label' htmlFor=''>
          {label}
        </label>
      )}
    </div>
  )
}
