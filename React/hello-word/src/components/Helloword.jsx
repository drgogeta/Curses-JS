import React from 'react'
import './HelloWord.css'

const HelloWord = () => {
    const messages = 'Hello Word!!'
    const isTrue = false
    return (
        <div className="container">
            <h1>{messages}</h1>
            {isTrue && <h3>Is true</h3>}
            {isTrue ? <h3>Is true</h3> : <h3>Is false</h3>}
        </div>
    )
}
export default HelloWord