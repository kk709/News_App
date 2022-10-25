import React from 'react';
import { useGlobalHook } from './Context';

const Search = () => {
  
  const { query, searchPost } = useGlobalHook();

  return (
    <>
      <h1>Tech News Website</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type="text" placeholder="Seach Here" 
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
      
    </>
  )
}

export default Search;