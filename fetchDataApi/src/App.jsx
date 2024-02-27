import React from 'react';
import Header from './Components/Header';
// import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import StoryList from './Components/StoryList';

function App() {
  return (
    <div>
      <Header />
      <StoryList></StoryList>
      <Footer />
    </div>
  );
}

export default App;