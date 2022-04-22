import {useState} from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import AppLayout from '../layouts/AppLayout';
import HnApi from '../services/HackerNewsApi';

/**
 * Main View containing the Header and the Main Page
 * @return {Home}
 */
function Home() {
  const [articles, setArticles] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState('react');

  const handleLoadMore = (page) => {
    // Default query on start or when String is empty
    HnApi.search({page: page, queryStr: query}).then((data) => {
      console.log(data);
      setArticles([...articles, ...data.hits]);
      setHasMore(data.hits.length > 0);
    });
  };

  const createNewQuery = (queryStr) => {
    setArticles([]);
    setQuery(queryStr);
  };
  return (
    <AppLayout createNewQuery={createNewQuery}>
      <ArticleList
        articles={articles}
        hasMore={hasMore}
        handleLoadMore={handleLoadMore}
      />
    </AppLayout>
  );
}

export default Home;
