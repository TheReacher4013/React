import React from 'react'
import useStore from './store/store';

const App = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state)=>state.decrement);

// // destructuring is also working\>
//   const { count, increment, decrement } = useStore();


  const store = useStore();
  console.log(store);//usestore hame ek object deta hai jisme humara sara state and methods hote hai likE increment AND DECREMENT
  return (
    <div>{count}
    <br />
      <button onClick={() => increment()}>Increment by 1</button><br />
      <br />
      <button onClick={()=> decrement()}>
        Decrement by 1
      </button>

    </div>
  )
};

export default App;