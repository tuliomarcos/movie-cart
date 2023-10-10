import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { BaseLayout } from 'layouts/BaseLayout'
import { Main } from 'pages/Main'
import { Cart } from 'pages/Cart'
import { Success } from 'pages/Success'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    ),
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/success',
        element: <Success />
      }
    ]
  }
])

export function Router() {
  return <RouterProvider router={router} />
}
