import React, { useState } from "react"

import { createContext } from "react"

export const AppCtx = createContext<AppContextType | null>(null)

const VisitedBooksContext = ({ children }: any) => {
  const [visitedBooks, setVisitedBooks] = useState<number[]>([])

  const addVisitedBooks = (id: number) => {
    if (!visitedBooks.includes(id)) {
      setVisitedBooks((visitedBooks) => [...visitedBooks, id])
    }
  }

  return <AppCtx.Provider value={{ visitedBooks, addVisitedBooks }}>{children}</AppCtx.Provider>
}

export default VisitedBooksContext

type AppContextType = {
  visitedBooks: number[]
  addVisitedBooks: (id: number) => void
}
