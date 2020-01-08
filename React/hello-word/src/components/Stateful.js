import React, {component} from 'React'

class Stateful extends component {
    constructor(props){
        super(props)
        this.state = {
            hello: 'Hello Word'
        }
    }

    render() {
        return(
        <h1>{this.state.hello}</h1>
        )
        
    }

}
export default Stateful;