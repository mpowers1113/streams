import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './UI/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<StreamList />} />
          <Route path="/new" element={<StreamCreate />} />
          <Route path="/delete/:id" element={<StreamDelete />} />
          <Route path="/edit/:id" element={<StreamEdit />} />
          <Route path="/show/:id" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
