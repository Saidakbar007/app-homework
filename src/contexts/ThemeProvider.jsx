import React from 'react';
import Welcome from './pages/Welcome';
import './styles/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext'; // Импортируй ThemeProvider

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  // остальные маршруты
]);

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <RouterProvider router={routerConfig} />
      </div>
    </ThemeProvider>
  );
};

export default App;
