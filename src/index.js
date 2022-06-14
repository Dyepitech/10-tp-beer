import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import App from './App';
import Home from './Home';
import BigCard from './components/BigCard';
import SearchBar from './components/SearchBar';
import ListBeer from './components/ListBeer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id/:name" element={<BigCard />} />
        <Route path="/recherche/:search" element={<ListBeer  />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams();
    let navigate = useNavigate();

    return <Component {...props} router={{ params, navigate }} />;
  }

  return ComponentWithRouter;
}
