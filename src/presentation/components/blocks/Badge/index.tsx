
interface BadgeProps {
  className?: string
  text: string
}

export const Badge = ({ className, text }: BadgeProps) => {
  return (
    <div className={`badge ${className ? className : ''}`}>
      <p>{text}</p>
    </div>
  )
}
