import {
  forwardRef,
  useRef,
  useImperativeHandle,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
} from 'react'

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}

export type FormHandle = { clear: () => void }

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const formRef = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref, () => {
      return {
        clear() {
          formRef.current?.reset()
        },
      }
    })

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData)
      onSave(data)

      //   formRef.current?.reset()
    }

    return (
      <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
        {children}
      </form>
    )
  },
)

export default Form
