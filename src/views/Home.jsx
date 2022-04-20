import ArticleList from '../components/ArticleList/ArticleList';
import AppLayout from '../layouts/AppLayout';

/**
 * Main View containing the Header and the Main Page
 * @return {Home}
 */
function Home() {
  return (
    <AppLayout>
      <ArticleList />
    </AppLayout>
  );
}

export default Home;
