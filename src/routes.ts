import Home from './pages/Home'

export const paths = {
  home: '/',
}

const routes = [
  {
    path: paths.home,
    component: Home,
    exact: true,
  },
]

export default routes
