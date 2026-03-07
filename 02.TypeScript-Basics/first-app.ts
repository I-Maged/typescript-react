function merge<T, U>(a: T, b: U) {
  return { ...a, ...b }
}

const user = merge<{ name: string }, { age: number }>(
  { name: 'Maged' },
  { age: 99 },
)
console.log(user)
