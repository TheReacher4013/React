import { useState } from "react";
import FirstComponent from "./FirstComponent.jsx";

const App = () => {

//hooks useState is hooks = hooks should be called always above top of the return keyword.

//what is useState = useState is a Hook that lets you add React state to function components.

  let [num, setNum] = useState(6);

  let isWorking = true;//false kel tar te rebder nahi honar because yalach conditional rendering mhnato. && / ?

  let content;
  if (isWorking) {
    content = <p>Working is the true</p>;
  }else{
    content = <p>Working is the false</p>;  
  }

  console.log(" app component got rendered ");

  const add = () => {
    setNum(num+1);

};
return (
  <div>
    <div>
      {/* {/ <FirstComponent num={num} add={add} /> its a propes.} */}
       
      <FirstComponent num={num} add={add} />

      {
        isWorking && <p>Working is true</p>
      }
      {
        content
      }
    </div>
  </div>

);
};

export default App;
