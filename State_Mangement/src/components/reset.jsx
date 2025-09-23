import React from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '../redux/reducer'

const Reset = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(reset())}>
            Reset
        </button>
    </div>
    
  )

}

export default reset