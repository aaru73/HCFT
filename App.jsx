
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import WelcomeScreen from '@/components/WelcomeScreen';
import HomeScreen from '@/components/HomeScreen';
import MusicSection from '@/components/MusicSection';
import VideoSection from '@/components/VideoSection';
import MemoriesSection from '@/components/MemoriesSection';
import NotesSection from '@/components/NotesSection';
import PicturesSection from '@/components/PicturesSection';
import GamesSection from '@/components/GamesSection';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <WelcomeScreen />;
  }

  return (
    <>
      <Helmet>
        <title>💖 Friendship App - A Gift From The Heart</title>
        <meta name="description" content="A heartwarming mobile app gift for your best friend - open when happy, sad, lonely, or just missing me" />
      </Helmet>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
          <div className="floating-hearts">
            <div className="heart">💖</div>
            <div className="heart">💕</div>
            <div className="heart">💗</div>
            <div className="heart">💝</div>
            <div className="heart">💖</div>
            <div className="heart">💕</div>
            <div className="heart">💗</div>
            <div className="heart">💝</div>
            <div className="heart">💖</div>
          </div>
          
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/music" element={<MusicSection />} />
            <Route path="/videos" element={<VideoSection />} />
            <Route path="/memories" element={<MemoriesSection />} />
            <Route path="/notes" element={<NotesSection />} />
            <Route path="/pictures" element={<PicturesSection />} />
            <Route path="/games" element={<GamesSection />} />
          </Routes>
          
          <Toaster />
        </div>
      </Router>
    </>
  );
}

export default App;
