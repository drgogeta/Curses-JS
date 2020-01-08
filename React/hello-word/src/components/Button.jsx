import React from 'react'

// StateFull Component
class Button extends React.Component {
        state = {
            count: 0
        }

    render(){
        const {count} = this.state
        return (
            <div>
                <h1>🍎: {count}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )}

    handleClick = () => {
        this.setState({count: this.state.count+1})
    }    
}

// Staless Component
/**
const Button = props => {
    const {text} = props
    return (
        <div>
            <h1>🍎: {this.state.conunt}</h1>
            <button onClick={this.hendleClick}>Click</button>
        </div>
    )
}
**/

export default Button