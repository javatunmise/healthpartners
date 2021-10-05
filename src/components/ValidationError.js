import React from 'react'


export class ValidationErrors extends React.Component
{
    render(){
        return (
        <ul className="validation-errors">
            {this.props.errors.map(str => <li>{str}</li>)}
        </ul>
        )
    }
}