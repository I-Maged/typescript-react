import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react'

type ContainerProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

const Container = <U extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<U>) => {
  const Component = as || 'div'
  return <Component {...props}>{children}</Component>
}

export default Container
