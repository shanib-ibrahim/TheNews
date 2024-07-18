import { CardDefault } from "./ui/Card";

const ArticleList = ({
  articlesBySection,
  section,
}: {
  articlesBySection: object;
  section: string[];
}) => {
  return (
    <>
      {section.map((item) => (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-12 mt-12 underline">
            {item}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articlesBySection[`${item}`].map((article) => (
              <CardDefault item={article} />
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default ArticleList;
