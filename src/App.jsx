import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import ArticleCard from './components/ArticleCard';
import './App.css'

export default function App() {
  const [articles, setArticles] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(setArticles)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto px-4 mt-24">
        <h1 className="text-3xl font-bold mb-6">{t('Technology News')}</h1>
        <div className="grid gap-6">
          {articles.map(a => (
            <ArticleCard key={a.link} article={a} />
          ))}
        </div>
      </main>
    </div>
  );
}
