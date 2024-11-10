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
  createBrowserRouter,
  RouterProvider,
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
    {/* <App /> */}
    
    <RouterProvider router={router} />
  </StrictMode>
</>);
