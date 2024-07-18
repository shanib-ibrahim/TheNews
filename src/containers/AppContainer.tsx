import { useEffect } from "react";
import { getArticles } from "../redux/articleSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import App from "../App";

const AppContainer = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.article.data);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return <App articles={articles} />;
};

export default AppContainer;
