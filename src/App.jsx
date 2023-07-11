import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Main from 'pages/Main';
import ProductsList from 'pages/ProductsList';
import BookMark from 'pages/Bookmark';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/products/list" element={<ProductsList />}></Route>
        <Route path="/bookmark" element={<BookMark />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
