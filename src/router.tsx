import { createBrowserRouter } from 'react-router-dom'
import { PublicLayout } from '@/common/components/layouts/PublicLayout'
import { Home } from '@/screens/home/Home'
import { NotFound } from '@/screens/not-found/NotFound'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  { path: '*', element: <NotFound /> },
])
