import { createBrowserRouter } from "react-router-dom";
import StepTwo from "../multiForm/StepTwo";
import StepThree from "../multiForm/StepThree";
import Multiform from "../multiForm/Multiform";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Multiform />,
  },
  {
    path: "/step-two",
    element: <StepTwo />,
  },
  {
    path: "/step-three",
    element: <StepThree />,
  },
]);
