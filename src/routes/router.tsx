import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Blog from "../pages/Blog";
import Form from "../components/Form";
import Property from "../pages/Property";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/imoveis/:id",
    element: <Details />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path:"/contato",
    element: <Form />
  },
  {
    path: "/imoveis",
    element: <Property />
  }
])