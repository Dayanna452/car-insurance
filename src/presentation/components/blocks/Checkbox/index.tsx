interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string
}

export const Checkbox = ({ text='Checkbox', ...props }: CheckboxProps) => {
  return (
    <label className='checkbox-container'>
      <input className='checkbox' type='checkbox' {...props} />
      <span className='checkbox-label'>{text}</span>
    </label>
  )
}
