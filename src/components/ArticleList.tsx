import React from "react";
import { CardDefault } from "./ui/Card";
import { Article } from "../interfaces/Article";

interface ArticleListProps {
  articlesBySection: {
    [key: string]: Article[];
  };
  section: string[];
}

export const ArticleList: React.FC<ArticleListProps> = ({
  articlesBySection,
  section,
}) => {
  return (
    <>
      {section.map((item) => (
        <section key={item} id={`${item.replace(/[ .]/g, "")}`}>
          <h2 className="text-2xl mx-4 font-semibold text-gray-800 mb-12 mt-12 underline">
            {item}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {articlesBySection[item].map((article) => (
              <CardDefault key={article.id} item={article} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};
