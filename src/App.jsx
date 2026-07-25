import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Voyage from './pages/Voyage';
import Travel from './pages/Travel';
import Explore from './pages/Explore';
import NeedToKnow from './pages/NeedToKnow';
import './index.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [explorePortId, setExplorePortId] = useState(null);

  // Allow any page to navigate to explore with a specific port
  const handleNavigate = (page, portId = null) => {
    setActivePage(page);
    if (portId) setExplorePortId(portId);
  };

  const handleTabChange = (tab) => {
    setActivePage(tab);
    if (tab !== 'explore') setExplorePortId(null);
  };

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--bg-primary)' }}>

      {/* Page content */}
      <main style={{ paddingBottom: 'var(--nav-safe)' }}>
        {activePage === 'home'      && <Home onNavigate={handleNavigate} />}
        {activePage === 'voyage'    && <Voyage />}
        {activePage === 'travel'    && <Travel />}
        {activePage === 'explore'   && <Explore initialPortId={explorePortId} />}
        {activePage === 'needtoknow'&& <NeedToKnow />}
      </main>

      {/* Bottom navigation */}
      <BottomNav active={activePage} onChange={handleTabChange} />
    </div>
  );
}