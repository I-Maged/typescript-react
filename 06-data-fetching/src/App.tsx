import { useEffect, useState, type ReactNode } from 'react'
import BlogPosts from './components/BlogPosts'
import get from './utils/http'
import { type BlogPost } from './components/BlogPosts'
import fetchingImg from './assets/data-fetching.png'
import ErrorMessage from './components/ErrorMessage'

type RawDataBlogPost = {
  userId: number
  id: number
  title: string
  body: string
}

const App = () => {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [err, setErr] = useState<string>()

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true)
      try {
        const data = (await get(
          'https://jsonplaceholder.typicode.com/posts',
        )) as RawDataBlogPost[]

        const blogPosts: BlogPost[] = data.map((rawPost) => {
          return { id: rawPost.id, title: rawPost.title, text: rawPost.body }
        })

        setFetchedPosts(blogPosts)
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          setErr(error.message)
        }
      }
      setIsLoading(false)
    }

    fetchPosts()
  }, [])

  let content: ReactNode

  if (isLoading) {
    content = <h2 id='loading-fallback'>Loading...</h2>
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }

  if (err) {
    content = <ErrorMessage text={err} />
  }

  return (
    <main>
      <img src={fetchingImg} alt='data fetching image' />
      {content}
    </main>
  )
}

export default App
