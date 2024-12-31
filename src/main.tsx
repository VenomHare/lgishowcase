import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Privacy from "./components/Pages/Privacy.tsx"
import ErrorPage from "./components/Pages/ErrorPage.tsx"
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
import BrowseMods from './components/Pages/BrowseMods.tsx'
import BrowsePatches from './components/Pages/BrowsePatches.tsx'
import PopupImage from './components/PopupImage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/mods",
    element: <BrowseMods />,
    errorElement: <ErrorPage />
  },
  {
    path: "/patches",
    element: <BrowsePatches />,
    errorElement: <ErrorPage />
  },

  {
    path: "/policies",
    element: <Privacy />,
    errorElement: <ErrorPage />
  },
  {
    path: "/showcase",
    element: <Showcase />,
    errorElement: <ErrorPage />
  },
  {
    path: "/community",
    element: <Downloads />,
    errorElement: <ErrorPage />
  },
  {
    path: "/howtobuy",
    element: <HowToBuy />,
    errorElement: <ErrorPage />
  },
]);

const popUp = sessionStorage.getItem("popupview")
const popupbool = popUp=="true" 
createRoot(document.getElementById('root')!).render(<>
  <StrictMode>
    {/* <App /> */}
    <Analytics />
    <SpeedInsights />
    {popupbool?<></>:<PopupImage/>}
    <RouterProvider router={router} />
  </StrictMode>
</>);
