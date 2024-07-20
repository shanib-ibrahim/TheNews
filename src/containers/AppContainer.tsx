import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getArticles } from "../redux/articleSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Spinner } from "@material-tailwind/react";
import App from "../App";
import ArticleDetailsContainer from "./ArticleDetailsContainer";

const AppContainer = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.article.data);
  const loading = useAppSelector((state) => state.article.loading);

  console.log("Article data", articles);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <Spinner
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<App articles={articles} />} />
      <Route path="/details/:id" element={<ArticleDetailsContainer />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppContainer;
