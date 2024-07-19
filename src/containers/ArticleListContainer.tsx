import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filteredBySection } from "../redux/articleSlice";
import { ArticleList } from "../components/ArticleList";
import { Article } from "../interfaces/Article";
import { Spinner } from "@material-tailwind/react";

interface ArticleListInterface {
  articles: Article[];
}

const ArticleListContainer: React.FC<ArticleListInterface> = ({ articles }) => {
  const dispatch = useAppDispatch();
  const filteredBySectionArticle = useAppSelector(
    (state) => state.article.filteredBySection
  );
  const section = useAppSelector((state) => state.article.section);
  const loading = useAppSelector((state) => state.article.loading);

  useEffect(() => {
    dispatch(filteredBySection(articles));
  }, [articles]);

  return loading || Object.keys(filteredBySectionArticle).length === 0 ? (
    <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  ) : (
    <ArticleList
      articlesBySection={filteredBySectionArticle}
      section={section}
    />
  );
};

export default ArticleListContainer;
