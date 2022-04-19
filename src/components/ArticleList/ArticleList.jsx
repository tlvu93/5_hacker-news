import { useEffect, useState } from 'react';
import HnApi from '../../services/HackerNewsApi';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    HnApi.search('test')
      .then((response) => response.json())
      .then((data) => setArticles(data.hits));
  }, []);

  return (
    <div>
      {articles &&
        articles.map((article) => {
          return <div key={article.objectID}>{article.title}</div>;
        })}
    </div>
  );
};

export default ArticleList;
