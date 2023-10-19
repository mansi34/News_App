import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Hero from './pages/home/container/Hero';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Articles from './pages/home/container/Articles';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';

function App() {
  return (
    <div className="App font-opensans">
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
