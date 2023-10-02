import { RouterProvider } from "react-router-dom";
import Multiform from "./multiForm/Multiform";
import { mainRouter } from "./router/mainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};

export default App;
