import './Dropdown.css'
import PropTypes from 'prop-types'
import React from 'react';

export function Dropdown( {list , label, id, selection} ) {

    return (<div className="dropdown">
        <label htmlFor={id}>{label}</label>
        <div className="dropdown-content">
            <select id={id} onChange={(e) => selection(e.target.value)}>
                {list.map(function(e){
                    return <option key={e}>{e}</option>;
                })}
            </select>
        </div>
    </div>)
}

Dropdown.propTypes = {
    list: PropTypes.array,
    label: PropTypes.string,
    id: PropTypes.string,
    selection: PropTypes.func
}