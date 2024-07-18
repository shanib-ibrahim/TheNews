import { Article } from "../interfaces/Article";

interface ArticleProps {
  article: Article;
}

const ArticleDetails: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="mb-4">
        <p className="text-gray-700">{article.abstract}</p>
      </div>
      <div className="flex items-center mb-4">
        <p className="text-sm text-gray-500 mr-2">Section: {article.section}</p>
        <p className="text-sm text-gray-500">
          Subsection: {article.subsection}
        </p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">By: {article.byline}</p>
        <p className="text-sm text-gray-500">
          Published: {article.published_date}
        </p>
      </div>
      <div className="mb-4">
        {article.media.map((mediaItem, index) => (
          <img
            key={index}
            src={mediaItem["media-metadata"][0].url} // Assuming using the first image for simplicity
            alt={mediaItem.caption}
            className="mb-2"
          />
        ))}
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default ArticleDetails;
