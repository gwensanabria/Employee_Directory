import React from 'react'
import './style.css'

function Search(props) {
    return (
        <form>
            <div className='form-group'>
                <label htmlFor='search'>Search: </label>
                <input
                onChange={props.handleInputChange}
                value={props.search}
                name='search'
                type='text'
                className='form-control'
                placeholder="Enter First Name"
                id='search'
                />
                <button onClick={props.handleFormSubmit} className='btn'>
                    Search
                </button>
            </div>
        </form>
    )
}

export default Search