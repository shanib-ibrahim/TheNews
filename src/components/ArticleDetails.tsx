import { Article } from "../interfaces/Article";

interface ArticleProps {
  article: Article;
}

const ArticleDetails: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="container mx-auto p-4 mb-[4rem]">
      <div className="max-w-4xl mx-auto  rounded-lg overflow-hidden">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
          <p className="text-gray-600 text-sm mb-4">{article.published_date}</p>

          <div className="mb-4">
            <img
              src={
                article?.media.length
                  ? article.media[0]["media-metadata"][2]?.url
                  : ""
              }
              alt={article.title}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className="text-gray-800">{article.abstract}</p>

          <p className="mt-4 text-gray-700">Source: {article.source}</p>
          <p className="text-gray-700">Section: {article.section}</p>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Read More on {article.source}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
