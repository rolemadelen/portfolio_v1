import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CV from './pages/cv.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="cv" element={<CV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
