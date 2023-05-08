import React, { useContext } from "react";
import { AppContext } from "../App";
import Loader from "../components/Loader";
import NewsBox from "../components/NewsBox";

const NewsPage = () => {
  const { data, categorey, isLoading } = useContext(AppContext);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto my-10">
          <h1 className="text-xl font-bold text-center">
            Total {data.length} news showing {categorey}
          </h1>
          <div className="mt-5 mx-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data.map((d) => <NewsBox key={d.id} d={d}/>)
            }
          </div>
        </div>
      )}
    </>
  );
};

export default NewsPage;
