import React from 'react';
import './assets/koinzz.svg';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreateCampaign from './pages/CreateCampaign';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
      </Routes>
    </div>
  );
}

export default App;
