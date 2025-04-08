import React from 'react';
import { formatDate } from '../utils';

const ArticleCard = ({ article }) => {
  if (!article) return null;

  // console.log('Article published:', article.published);

  return (
    <div className="flex flex-col sm:flex-row justify-between border-b py-6 text-left">
      {/* Left Text Block */}
      <div className="flex-1 pr-6">
        <p className="text-xs uppercase text-gray-500 mb-1">
          {formatDate(article.published)}
        </p>

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold font-serif hover:underline"
        >
          {article.title}
        </a>

        <p className="text-sm mt-2 text-gray-800">
          {article.description}
        </p>

        {article.author && (
          <p className="text-xs mt-2 uppercase text-gray-500 font-medium">
            By {article.author}
          </p>
        )}
      </div>

      {/* Right-side Image */}
      {article.imageUrl && (
        <div className="w-full sm:w-48 h-32 mt-4 sm:mt-0 sm:ml-4">
          <img
            src={article.imageUrl}
            alt={article.title || 'News thumbnail'}
            className="object-cover w-full h-full rounded"
          />
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
