import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './store/index.ts'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './pages/PostsPage/Posts.tsx'
import AboutMe from './pages/AboutMePage/AboutMe.tsx'
import User from './pages/UserPage/User.tsx'
import Layout from './components/Layout.tsx'
import NotFound from './pages/NotFoundPage/NotFound.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Posts />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/user/:uId' element={<User />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
