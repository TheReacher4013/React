import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ChildComponent from "./components/ChildComponent";
import { AuthProvider } from "./store/AuthStore";
import LoginButton from "./components/LoginComponent";
import {
  ThemeProvider,
  useTheme,
} from "./store/ThemeStore";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/reducer";
import Decrement from "./components/Decrement";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(toggleTheme);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    // <AuthProvider>
    //   <div>
    //     <LoginButton />
    //   </div>
    // </AuthProvider>
    <>
      {/* <div>{theme}</div>
      <button onClick={() => toggleTheme()}>
        CLick to change theme
      </button> */}

      <div>{count} count</div>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>     
      <Decrement />
      <Reset />
    </>
  );
};

export default App;