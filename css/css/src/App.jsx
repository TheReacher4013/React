import React from 'react'
// import './App.css' // Importing CSS file its normal css file importing way.

import styles from "./App.module.css" // Importing module.css file its new way to import css file.

const App = () => {
  return (
    <div className={styles.container}>App</div>
  )
}

export default App

//this react project based on how to connected way css with react 
//tailwind and normal css are skip and bootstrap are also skip 
//moduel.css is new way to connected css with react so learn this in project 
// filename.module.css = .module is important
//why use module.css file = to avoid css class name conflict and its provide better modularity and unique id for each class name.
//In easy language there are two components have same className div but they not apply same css property because they have unique id for each class name.