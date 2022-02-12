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
          <Route path="/" index element={<StreamList />} />
          <Route path="/new" element={<StreamCreate />} />
          <Route path="/delete" element={<StreamDelete />} />
          <Route path="/edit" element={<StreamEdit />} />
          <Route path="/show" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
