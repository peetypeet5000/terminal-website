import React from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Resume from './components/Resume'
import Menu from './components/Menu'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route index element={<Menu />} />
    <Route path='resume' element={<Resume />} />
    <Route path='projects' element={<Projects />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
  </Route>
));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
