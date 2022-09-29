import React, { FC, useState } from "react"
import { GetServerSideProps } from "next"
import { BookType } from "../../types"
import Search from "../../components/Search"
import Book from "../../components/Book"

const Books: FC<BooksProps> = ({ books }) => {
  const [search, setSearch] = useState("")

  const searchBook = (search: string) => {
    setSearch(search)
  }

  return (
    <>
      <h1 className="w-4 text-center">Books list</h1>
      <Search searchBook={searchBook} />
      <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ul>
    </>
  )
}

export default Books

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://gutendex.com/books?search=''")
  const { results: books } = await res.json()
  return {
    props: { books },
  }
}

type BooksProps = {
  books: BookType[]
}
