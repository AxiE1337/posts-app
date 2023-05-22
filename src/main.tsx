import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './pages/PostsPage/Posts.tsx'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { store } from './store/index.ts'
import { Provider } from 'react-redux'
import Header from './components/Header.tsx'
import AboutMe from './pages/AboutMePage/AboutMe.tsx'
import User from './pages/UserPage/User.tsx'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Posts />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/user' element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
