import { Article } from "../interfaces/Article";

const LatestArticle = ({ latestNews }: { latestNews: Article }) => {
  return (
    <section id="home">
      <h2 className="text-3xl  mx-4 font-semibold text-gray-800 mb-6">
        Latest News
      </h2>
      <div className="flex flex-col mx-4 lg:flex-row justify-around  rounded-lg  overflow-hidden mb-8">
        <img
          src={
            latestNews.media
              ? latestNews.media[0]["media-metadata"][2]?.url
              : ""
          }
          alt={latestNews.title}
          className="w-full h-100 object-contain object-top rounded-lg "
        />
        <div className="p-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            {latestNews.title}
          </h2>
          <p className="text-gray-600 mb-4">{latestNews.abstract}</p>
          <a
            href={latestNews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-black text-white font-semibold px-4 py-2 rounded"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestArticle;
