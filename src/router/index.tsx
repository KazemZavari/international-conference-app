import { createBrowserRouter } from "react-router-dom";
import App from "../App";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/news",
    element: <div>News page</div>,
  },

]);