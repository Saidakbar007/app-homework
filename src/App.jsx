import React from "react";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import { ThemeProvider } from "./contexts/themeContext";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/step-one",
    element: <StepOne />,
  },
  {
    path: "/step-two",
    element: <StepTwo />,
  },
  {
    path: "/step-three",
    element: <StepThree />,
  },
  {
    path: "/step-four",
    element: <StepFour />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);

const App = () => {
  return (
    <ThemeProvider>  {/* Оборачиваем маршрутизатор в ThemeProvider */}
      <div className="App">
        <RouterProvider router={routerConfig} />
      </div>
    </ThemeProvider>
  );
};

export default App;
