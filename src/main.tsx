import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Roster from "./components/Pages/Roster.tsx"
import Free from "./components/Pages/Free.tsx"
import Privacy from "./components/Pages/Privacy.tsx"
import ErrorPage from "./components/Pages/ErrorPage.tsx"
import Exclusive from "./components/Pages/Exclusive.tsx"
import Showcase from "./components/Pages/Showcase.tsx"
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:  <ErrorPage />
  },
  {
    path: "/home",
    element: <App/>,
    errorElement:  <ErrorPage />
  },
  {
    path: "/roster",
    element: <Roster/>,
    errorElement:  <ErrorPage />
  },
  {
    path: "/free",
    element: <Free/>,
    errorElement:  <ErrorPage />
  },
  {
    path: "/policies",
    element: <Privacy/>,
    errorElement:  <ErrorPage />
  },
  {
    path: "/exclusive",
    element: <Exclusive/>,
    errorElement:  <ErrorPage />
  },
  {
    path: "/showcase",
    element: <Showcase/>,
    errorElement:  <ErrorPage />
  },
]);

createRoot(document.getElementById('root')!).render(<>
  <StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/exclusive" element={<Exclusive />} />
        <Route path="/polices" element={<Privacy/>} />
        <Route path="/free" element={<Free/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
</>);
