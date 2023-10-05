import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Main } from "pages/Main"
import { Cart } from "pages/Cart";
import { Success } from "pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

export function Router() {
  return <RouterProvider router={router}/>
}