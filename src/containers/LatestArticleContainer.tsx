import { useEffect } from "react";
import { Article } from "../interfaces/Article";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import LatestArticle from "../components/LatestArticle";
import { findLatestArticle } from "../redux/articleSlice";
import LatestArticleShimmer from "../components/ui/shimmer-ui/LatestArticleShimmer";

interface LatestArticleInterface {
  articles: Article[];
}

const LatestArticleContainer: React.FC<LatestArticleInterface> = ({
  articles,
}) => {
  const dispatch = useAppDispatch();
  const latestNews = useAppSelector((state) => state.article.latestArticle);

  useEffect(() => {
    dispatch(findLatestArticle(articles));
  }, [articles]);

  return !latestNews ? (
    <LatestArticleShimmer />
  ) : (
    <LatestArticle latestNews={articles[0]} />
  );
};

export default LatestArticleContainer;
