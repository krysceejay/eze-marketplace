import { useState } from 'react'

const SearchForm = () => {
    const [search, setSearch] = useState('')
    const handleOnchange = e => {
        const {value} = e.target
        setSearch(value)
    } 

    const handleSubmit = async e => {
        e.preventDefault()
        //console.log(search)
    }
    return (
        <form className="flex flex-row mt-8" onSubmit={handleSubmit}>
            <input className="w-3/5 inline-block h-10 appearance-none text-gray-700 border rounded py-3 px-4 mb-3 mr-3 leading-tight focus:outline-none focus:bg-white" 
              type="text" 
              placeholder="Enter Search Term (e.g iPhone X, 128GB or A1)"
              name="search" value={search} onChange={handleOnchange} />
            <button className="flex flex-row items-center bg-blue-500 text-sm h-10 text-white py-1 px-2 rounded" type="submit">
              <span>Search</span>
              <span className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
        </form>
    )
}

export default SearchForm
