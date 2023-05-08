import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

export const AppContext = createContext();

function App() {
  const [categorey, setCategorey] = useState("all");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  //news api
  const url = `https://inshorts.deta.dev/news?category=${categorey}`;

  //get news data
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [url]);

  //sending app info
  const appInfo = {
    isLoading,
    data,
    setCategorey,
    categorey,
  };

  return (
    <AppContext.Provider value={appInfo}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
