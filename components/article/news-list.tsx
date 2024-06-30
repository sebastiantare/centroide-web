import NewsArticle from './news-article';
import type { Article } from 'types/types';

const NewsList = ({ rows }: { rows: Article[] }) => {
  return (
    <div className="space-y-4">
      {rows.map((row) => (
        <NewsArticle key={row.article_hash} article={row} image_src={`https://starebucket.s3.sa-east-1.amazonaws.com/s3_${row.article_hash}.png`} />
      ))}
    </div>
  );
};

export default NewsList;

