export default async function get(url: string) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Error: Couldn't fetch data ")
  }
  const data = (await response.json()) as unknown

  return data
}
