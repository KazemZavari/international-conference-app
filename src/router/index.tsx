import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NewsPage from "../components/pages/NewsPage";
import NewsSinglePage from "../components/pages/NewsSinglePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/newsSinglePage",
    element: <NewsSinglePage />,
  },
]);
