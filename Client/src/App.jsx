import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { lazy, Suspense } from "react"
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Chat = lazy(() => import("./pages/Chat"))
const Group = lazy(() => import("./pages/Group"))
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Loaders from "./components/Loaders"
import store from "./app/store.js"
import {Provider} from "react-redux"
function App() {
  let user = true
  return (
    <BrowserRouter>
      <Suspense fallback={<Loaders />}>
          <Provider store={store}>
          <Routes>
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/" element={<Home />} />
              <Route path="/chat/:id" element={<Home/>} />
              <Route path="/group" element={<Group />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
          </Provider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
