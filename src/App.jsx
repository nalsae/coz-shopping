import { Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import ProductsList from 'pages/ProductsList';
import BookMark from 'pages/Bookmark';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/products/list" element={<ProductsList />}></Route>
      <Route path="/bookmark" element={<BookMark />}></Route>
    </Routes>
  );
}

export default App;
