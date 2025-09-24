import {create} from 'zustand';

//create and set are main function to use create a store in zustand
//create is used to create a store
//set is used to update the state of the store
// that is bass yahi pass karke ke state ko update karte hai

const useStore = create((set)=>{
    return {
        // initial state
        count:10,

        //methods to update the state
        increment:() => set ((state)=>({count:state.count  += 1})),
        decrement: () => set((state) => ({ count: state.count -= 1 }))
    }
})
export default useStore;