import { useEffect } from "react";
import { getArticles } from "../redux/articleSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Spinner } from "@material-tailwind/react";
import App from "../App";

const AppContainer = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.article.data);
  const loading = useAppSelector((state) => state.article.loading);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  ) : (
    <App articles={articles} />
  );
};

export default AppContainer;
