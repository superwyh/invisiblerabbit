import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import RoomApp from './room/App';
import WaitingApp from './waiting/App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/room" element={<RoomApp />} />
        <Route path="/waiting" element={<WaitingApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);