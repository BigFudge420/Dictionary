import { useState } from 'react'
import './App.css'
import useFetchDefinition from './components/useFetchDefinition'
import debounce from '../../js-snippets/src/core-js/debounce'

  function App() {
    const [word, setWord] = useState('hello')
    let info = useFetchDefinition(word)
    let debouncedSetWord = debounce(setWord, 1000)
    
    return (
      <div>
        <input type="text" 
        name='searchTerm' 
        id='searchTerm' 
        className='border border-black'
        onChange={(e) => debouncedSetWord(e.target.value)}
        placeholder='Search'
        />
        <button className='bg-black text-white'
        onClick={() => console.log(info)}
        >Search</button>
      </div>
    )

  }

export default App
