import { useState } from "react"
import CurrencyConverter from "./components/currencyConverter.jsx"
import PasswordGenerator from "./components/passwodGenerator.jsx"
import Profile from "./components/Profile.jsx"
import Login from "./components/Login.jsx"
import ContextProvider from "./userContext/contextProvider.jsx"





function App( ) {
  return (
    <div>
      <ContextProvider>
      <h1>react for context Api</h1>
      <Login/>
      <Profile/>
      </ContextProvider>

    </div>
  
  )
}

export default App
