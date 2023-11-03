import { useRef } from "react"
import { Prop } from "./types/SearchBar.types"

const SearchBar = ({setInputValue}:Prop) => {

    const inputSearch = useRef<HTMLInputElement | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void=>{
      e.preventDefault()
      let inputValue:string | undefined = inputSearch.current?.value
      if(inputValue){
        setInputValue(inputValue.trim())
      }
      inputValue= ""
    }
  return (
    <nav className='flex max-w-md w-11/12 mb-4 pb-2 border-b-2 border-b-teal-500'>
        <form className='flex justify-center w-full' onSubmit={handleSubmit}>
            <input className='flex-1 p-1 rounded-md mr-1 border-none text-white bg-transparent outline-none placeholder:text-white' ref={inputSearch}  type='text'placeholder='Search for another city'/>
            <button className='font-medium rounded-md bg-teal-500 text-white border-none px-2 transition ease-in-out delay-100 hover:bg-teal-700'>Search</button>
        </form>
    </nav>
  )
}

export default SearchBar