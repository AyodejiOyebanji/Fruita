import React from 'react'
import "../Search/Search.css"

function Search() {
    const searchProduct=()=>{

    }
  return (
    <div>

<input
          type="search"
          placeholder="Search"
          id="search_box"
        //   className="col-md-5 mt-4"
          onInput={()=>searchProduct()}
        />
    </div>
  )
}

export default Search