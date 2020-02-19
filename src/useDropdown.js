import React, { useState }  from 'react'

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState)
    
    const Dropdown = () => (
        <label htmlFor={label.replace(' ', '').toLowerCase()}>
            {label}
            <select
                id={label.replace(' ', '').toLowerCase()}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => setState(e.target.value)}
                disabled={options.length === 0} 
            >
                <option>All</option>
                {options.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
    )

    return [state, Dropdown, setState]
}

export default useDropdown