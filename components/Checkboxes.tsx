import React, { ChangeEvent, FC } from "react"

export const Checkbox: FC<CheckboxProps> = ({ name, language, setLanguage }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setLanguage(language)
    } else {
      setLanguage("en")
    }
  }

  return (
    <label className="mr-3">
      <input className="cursor-pointer" type={"checkbox"} onChange={onChangeHandler} />
      <span className="ml-1">{name}</span>
      <input className="cursor-pointer" type={"checkbox"} onChange={onChangeHandler} />
      <span className="ml-1">{name}</span>
      <input className="cursor-pointer" type={"checkbox"} onChange={onChangeHandler} />
      <span className="ml-1">{name}</span>
    </label>
  )
}

type CheckboxProps = {
  name: string
  language: string
  setLanguage: (language: string) => void
}
