import ArticleDetails from "./components/ArticleDetails";
import { Article } from "./interfaces/Article";

const App = ({ articles }: { articles: Article[] | null }) => {
  console.log("log articles", articles);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-8">
        <h1 className="text-4xl fontz-bold text-center mb-8">The News</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles &&
            articles.map((article, index) => (
              <ArticleDetails key={index} article={article} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
