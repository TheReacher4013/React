//useEffect 
import React,{useEffect} from 'react'

const FunctionalComponents = (props) => {
    // //useEffect()
    // useEffect(() => {
    //          //mounting


    //     return(
    //         //unmounting/cleanup
    //     )
    // }, [dependencies])//this array is optional its also called dependency array its empty by default
    
    //componentDidMount
    useEffect(() => {
        console.log('phase 1 (mounting): useEffect() - componentDidMount')
        console.log(props)
    }, [])//always pass empty square brackets 

    useEffect(() => {
        console.log('phase 2 (updating): useEffect() - componentDidUpdate')
        console.log(props)
    },[props.state]);//whenever props.state changes this useEffect will be called 

    useEffect(() => {
        return () => {
            console.log('phase 3 (unmounting): useEffect() - componentWillUnmount')
            return () => {
                console.log("component unmounted successfuly")
            }
        }
    },[])

  return (
    <div>FunctionalComponents</div>
  )
}

export default FunctionalComponents