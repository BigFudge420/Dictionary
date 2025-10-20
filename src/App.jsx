import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './App.css'
import axios from 'axios'
import Defintion from './components/Definition'

  function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [search, setSearch] = useState(false)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const replacedTerm = encodeURIComponent(searchTerm.trim())
   

    function getData() {
      console.log(replacedTerm)
      setLoading(true)
      axios.get(`https://dictionary-xi-wheat.vercel.app/api/dictionary?word=${replacedTerm}`).then((response) => {
        setLoading(false)
        console.log(response.data)
        setData(response.data)
      }).catch((err) => {
        setLoading(false)
        setData(null)
        console.log("Error pulling data:", err)
      })
    }
    
    return (
      <div>
        <div className='flex justify-center p-4 gap-4'>
          
          <input type="text" name='searchTerm' id='searchTerm' 
          className='border border-black w-96 rounded-3xl p-2 bg-white active:bg-white' placeholder='Search'
          onChange={(e) => {setSearchTerm(e.target.value)}}/>

          <button className='flex items-center justify-center'
          onClick={() => {getData(); setSearch(true)}}>
            <FaSearch className='h-6 w-6'/>
          </button>

        </div>

        <Defintion infoProp={data} searchProp={search} searchTermProp={replacedTerm} loading={loading}/>
      </div>
    )

  }

export default App
