import React from 'react'

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
                placeholder="Look up Employee"
                id='search'
                />
                <button onClick={props.handleFromSubmit} className='btn btn primary'>
                    Search
                </button>
            </div>
        </form>
    )
}

export default Search