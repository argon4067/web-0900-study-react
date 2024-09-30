import { createBrowserRouter } from 'react-router-dom';
import Intro from '../pages/intro/Intro';
import Job from '../pages/intro/Job';
import Main from '../pages/main/Main';
import Layout from '../pages/layout/Layout';
import NotFound from '../pages/notFound/NotFound';
import My from '../pages/my/My';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Main />
      },
      {
        path : "/intro",
        element : <Intro />
      },
      {
        path : "/job",
        element : <Job />,
        children : [
          {
            path : ":title",
            element : <Job />
          }
        ]
      },
      {
        path : "/my",
        element : <My />
      },
    ]
  },
  {
    path : "*",
    element : <NotFound />
  }
])
  

export default router;