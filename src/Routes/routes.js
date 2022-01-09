import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from '../pages/SignIn/index'
import SignUp from '../pages/SignUp/index'


const RoutesPath = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<SignIn/>} />
        <Route path="/register" element={<SignUp />}  />
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesPath