import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { findArticleById } from "../redux/articleSlice";
import ArticleDetails from "../components/ArticleDetails";
import { Spinner } from "@material-tailwind/react";

const ArticleDetailsContainer = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const article = useAppSelector((state) => state.article.filteredArticleById);

  useEffect(() => {
    dispatch(findArticleById(Number(id)));
  }, []);

  return !article ? (
    <div className="flex items-center justify-center h-screen">
      <Spinner
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </div>
  ) : (
    <ArticleDetails article={article} />
  );
};

export default ArticleDetailsContainer;
