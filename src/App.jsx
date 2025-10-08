import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Defintion from './components/Definition'

  function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [search, setSearch] = useState(false)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
   

    function getData() {
      setLoading(true)
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`).then((response) => {
        setLoading(false)
        setData(response.data)
      }).catch((err) => {
        setLoading(false)
        setData(null)
        console.log("Error pulling data:", err)
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
        <Defintion infoProp={data} searchProp={search} searchTermProp={searchTerm} loading={loading}/>
      </div>
    )

  }

export default App
