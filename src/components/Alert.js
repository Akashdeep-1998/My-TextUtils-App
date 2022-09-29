import React from 'react'

const Alert = (props) => {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.substring(1);
    }
    return (
        <div style={{ height:'50px', padding:'0'}}>
        {props.alert && <div className={`container w-50 alert alert-${props.alert.type}
        alert-dismissible fade show text-center`} role="alert">
            <strong>{capitalize(props.alert.type)}: </strong> {props.alert.message}
        </div>}
        </div>

    )
}

export default Alert;
