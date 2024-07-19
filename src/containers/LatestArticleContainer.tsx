import { useEffect } from "react";
import { Article } from "../interfaces/Article";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import LatestArticle from "../components/LatestArticle";
import { findLatestArticle } from "../redux/articleSlice";
import LatestArticleShimmer from "../components/ui/shimmer-ui/LatestArticleShimmer";

interface LatestArticleInterface {
  articles: Article[] | null;
}

const LatestArticleContainer: React.FC<LatestArticleInterface> = ({
  articles,
}) => {
  const dispatch = useAppDispatch();
  const latestNews = useAppSelector((state) => state.article.latestArticle);
  const newsArticles = articles ? articles : [];

  useEffect(() => {
    dispatch(findLatestArticle(newsArticles));
  }, [newsArticles]);

  return !latestNews ? (
    <LatestArticleShimmer />
  ) : (
    <LatestArticle latestNews={newsArticles[0]} />
  );
};

export default LatestArticleContainer;
