import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route';

function App() {
  return (
    <div style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div >
  );
}

export default App;
