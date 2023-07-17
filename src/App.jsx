import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from 'components';
import { Main, ProductsList, Bookmark } from 'pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/products/list" element={<ProductsList />}></Route>
        <Route path="/bookmark" element={<Bookmark />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
