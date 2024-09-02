import {BrowserRouter, Route, Routes} from "react-router-dom"
import React, {lazy, Suspense} from "react"
const Home = lazy(()=>import("./pages/Home"))
const Login = lazy(()=>import("./pages/Login"))
const Chat = lazy(()=>import("./pages/Chat"))
const Group = lazy(()=>import("./pages/Group"))
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Loaders from "./components/Loaders"
function App() { 
  let user = true
  return (
    <BrowserRouter>
    <Suspense fallback={<Loaders/>}>
    <Routes>
      <Route element={<ProtectedRoute user={user}/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/chat/:id" element={<Chat/>}/>
      <Route path="/group" element={<Group/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App
