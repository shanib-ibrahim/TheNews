import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filteredBySection } from "../redux/articleSlice";
import ArticleList from "../components/ArticleList";
import { Article } from "../interfaces/Article";

interface ArticleListInterface {
  articles: Article[];
}

const ArticleListContainer: React.FC<ArticleListInterface> = ({ articles }) => {
  const dispatch = useAppDispatch();
  const filteredBySectionArticle = useAppSelector(
    (state) => state.article.filteredBySection
  );
  const section = useAppSelector((state) => state.article.section);

  useEffect(() => {
    dispatch(filteredBySection(articles));
  }, [articles]);

  return (
    <ArticleList
      articlesBySection={filteredBySectionArticle}
      section={section}
    />
  );
};

export default ArticleListContainer;
