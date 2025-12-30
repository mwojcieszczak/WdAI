import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import BlogList from './components/BlogList'
import Dodaj from './components/Dodaj'
import Article from './components/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/blog" element={<BlogList />}></Route>
          <Route path="/dodaj" element={<Dodaj />}></Route>
          <Route path="/article/:id" element={<Article />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
