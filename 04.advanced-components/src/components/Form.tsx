import type { ChangeEvent, ComponentPropsWithoutRef, FC } from 'react'

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}

const Form: FC<FormProps> = ({ onSave, children, ...otherProps }) => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const data = Object.fromEntries(formData)

    onSave(data)
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  )
}

export default Form
