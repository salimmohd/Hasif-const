type MaterialIconProps = {
  className?: string
  name: string
}

function MaterialIcon({ className = '', name }: MaterialIconProps) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>
}

export default MaterialIcon
