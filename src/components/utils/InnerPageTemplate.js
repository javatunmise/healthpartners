import React from 'react'

var InnerPageTemplate = (props) => {

    return (
        <div className="inner-page-container">
            <h3>{props.PageTitle}</h3>
            <br />
            {props.children}
        </div>
    )
}

export default InnerPageTemplate;