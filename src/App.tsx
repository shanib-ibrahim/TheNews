import { Article } from "./interfaces/Article";
import LatestArticleContainer from "./containers/LatestArticleContainer";
import ArticleListContainer from "./containers/ArticleListContainer";

interface AppInterface {
  articles: Article[] | null;
}

const App: React.FC<AppInterface> = ({ articles }) => {
  return (
    <main>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto ">
          <LatestArticleContainer articles={articles} />
          <ArticleListContainer articles={articles} />
        </div>
      </section>
    </main>
  );
};

export default App;
