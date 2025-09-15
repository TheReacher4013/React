//mounting , unmounrting , updating 
import React from 'react'

class ClassComponents extends React.Component {
    constructor(props){
        //1. intialization
        super(props)
        this.state = {count : 0}
        console.log('phase 1 (mounting): constructor()');
    }
    componentDidMount(){
        //3. side effects
        console.log('phase 1 (mounting): componentDidMount()');
        // see the initial title after first render
        document.title = `you clicked 0 times`
    }
    componentWillUnmount(){
        //4. cleanup
        console.log('phase 3 (unmounting): componentWillUnmount()');
        //cleanup: Reset the title when component unmounts is removed.
        document.title = 'React App';
    }
    componentDidUpdate(){
        console.log('phase 2 (updating): componentDidUpdate()');
        // see the updated title after every re-render/ every state change
        document.title = `you clicked ${this.state.count} times`
    }
    increment = () => {
        this.setState({count : this.state.count + 1})
    }

    render(){
        //2. render
        console.log('phase 2 (mounting/updating): render()');
        return(
            <div>
                <p>check the browser tab title</p>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.increment}>Click me  </button>
            </div>
        ); 
    }


}
 export default ClassComponents;