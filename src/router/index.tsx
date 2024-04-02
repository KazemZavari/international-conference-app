import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import NewsPage from "../components/pages/NewsPage";
import NewsSinglePage from "../components/pages/NewsSinglePage";
import Information from "../components/pages/Information";
import Contact from "../components/pages/Contact";
import Gallery from "../components/pages/Gallery";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h3> Page Note Found 🙄 ... </h3>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/newsSinglePage",
        element: <NewsSinglePage />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },

      {
        path: "/information",
        element: <Information />,
      },
      {
        path: "/loginPage",
        element: <LoginPage />,
      },
      {
        path: "/registerPage",
        element: <RegisterPage />,
      },
      
    ],
  },
  // {
  //   path: "/",
  //   element: <App />,
  // },
  // {
  //   path: "/news",
  //   element: <NewsPage />,
  // },
  // {
  //   path: "/newsSinglePage",
  //   element: <NewsSinglePage />,
  // },
  // {
  //   path: "/contact-us",
  //   element: <ContacrForm />,
  // },
  // {
  //   path: "/gallery",
  //   element: <Gallery />,
  // },

  // {
  //   path: "/information",
  //   element: <Information />,
  // },
]);
