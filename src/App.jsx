import { useState } from 'react'
import './App.css'
import debounce from '../../js-snippets/src/core-js/debounce'
import axios from 'axios'
import Defintion from './components/Definition'

  function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [search, setSearch] = useState(false)
    const [data, setData] = useState(null)
   

    function getData() {
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`).then((response) => {
        setData(response.data)
      })
    }
    
    return (
      <div>
        <input type="text" 
        name='searchTerm' 
        id='searchTerm' 
        className='border border-black'
        placeholder='Search'
        onChange={(e) => {
          setSearchTerm(e.target.value)

        }}
        />
        <button className='bg-black text-white'
        onClick={() => {
          getData(searchTerm)
          setSearch(true)
        }}
        >Search</button>
        <Defintion infoProp={data} searchProp={search} searchTermProp={searchTerm}/>
      </div>
    )

  }

export default App
