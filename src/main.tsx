import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Roster from "./components/Pages/Roster.tsx"
import Free from "./components/Pages/Free.tsx"
import Privacy from "./components/Pages/Privacy.tsx"
import ErrorPage from "./components/Pages/ErrorPage.tsx"
import Exclusive from "./components/Pages/Exclusive.tsx"
import Showcase from "./components/Pages/Showcase.tsx"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import Downloads from './components/Pages/Downloads.tsx'
import HowToBuy from './components/Pages/HowToBuy.tsx'

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
  {
    path: "/downloads",
    element: <Downloads />,
    errorElement:  <ErrorPage />
  },
  {
    path: "/howtobuy",
    element: <HowToBuy />,
    errorElement:  <ErrorPage />
  },
]);

createRoot(document.getElementById('root')!).render(<>
  <StrictMode>
    {/* <App /> */}
    <Analytics/>
    <SpeedInsights/>
    <RouterProvider router={router} />
  </StrictMode>
</>);
