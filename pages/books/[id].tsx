import { useRouter } from "next/router"
import { BookType } from "../types"
import { FC } from "react"
import { GetServerSideProps } from "next"

const Book: FC<BookProps> = ({ book }) => {
  const { query } = useRouter()
  console.log(query)
  return (
    <div>
      <h1>Book id {query.id}</h1>
      <div>{book.title}</div>
    </div>
  )
}
export default Book

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // @ts-ignore
  const res = await fetch(`https://gutendex.com/books/${params.id}`)
  const book = await res.json()
  return {
    props: { book },
  }
}

type BookProps = {
  book: BookType
}
