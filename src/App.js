import { createContext, useEffect, useState } from "react";
import SearchBox from "./pages/SearchBox";
import axios from "axios";
import NewsPage from "./pages/NewsPage";

export const AppContext = createContext();

function App() {
  const [categorey, setCategorey] = useState("all");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://inshorts.deta.dev/news?category=${categorey}`

  //get the from photos_url
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
    categorey
  };
  
  return (
    <AppContext.Provider value={appInfo}>
      <SearchBox/>
      <NewsPage/>
    </AppContext.Provider>
  );
}

export default App;
