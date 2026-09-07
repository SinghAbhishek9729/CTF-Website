import Home from './pages/Home';
import Register from './pages/Register';

export default function App() {
  return window.location.pathname.startsWith('/register') ? <Register /> : <Home />;
}