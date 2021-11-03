/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const Answer = ({url, copyLink}) => {
    
    return (
        <div className="result">
        <div className="sent">{url.result.original_link}</div>
        <div className="shortened" id="short"><div>{url.result.short_link}</div>
        <div className="copy-wrapper"></div>
        <a href="#" onClick={()=>{copyLink(url.result.short_link)}} className="copy">Copy</a></div>
        </div>
    )
}
