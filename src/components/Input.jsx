import React from 'react'

function Input(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>Enter your {props.placeholder}</label>
            <input 
                type="number" 
                className="form-control" 
                id={props.id} placeholder={props.placeholder} 
                required 
                onChange={props.onChange}
                value={props.value}             
            />
        </div>
    )
}

export default Input
