

import routes from '~react-pages';
import { useRoutes } from 'react-router';
import Signup from './pages/signup';
import SignupComplete from './pages/SignupComplete';

function App() {
  const customRoutes = [
    { path: "/", element: <Signup /> },
    { path: "/signup-complete", element: <SignupComplete /> },
  ];

  const routing = useRoutes([...routes, ...customRoutes]);

  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;

