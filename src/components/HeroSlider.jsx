import React, { useState, useEffect } from 'react';
import { heroSlides } from '../data/tripData';

export default function HeroSlider({ children }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState({});

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100svh',
      overflow: 'hidden',
      background: 'var(--ocean-deep)',
    }}>
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Image with Ken Burns effect */}
          <div style={{
            position: 'absolute',
            inset: '-5%',
            backgroundImage: loaded[i] ? `url(${slide.url})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: i === current ? 'kenBurns 8s ease-out forwards' : 'none',
          }} />

          {/* Preload image */}
          <img
            src={slide.url}
            alt=""
            style={{ display: 'none' }}
            onLoad={() => setLoaded(prev => ({ ...prev, [i]: true }))}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.1) 40%, rgba(10,22,40,0.7) 80%, rgba(10,22,40,0.92) 100%)',
        zIndex: 1,
      }} />

      {/* Slide label — top left on mobile, bottom left on desktop */}
<div style={{
  position: 'absolute',
  top: 'env(safe-area-inset-top, 16px)',
  left: '16px',
  zIndex: 2,
  marginTop: '16px',
}}>
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(10,22,40,0.45)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '20px',
    padding: '5px 12px',
  }}>
    <span style={{
      fontSize: '10px',
      color: 'rgba(255,255,255,0.5)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      fontWeight: '500',
    }}>
      📍
    </span>
    <span style={{
      fontSize: '11px',
      color: 'rgba(255,255,255,0.85)',
      fontWeight: '500',
    }}>
      {heroSlides[current].sublabel}
    </span>
  </div>
</div>

      {/* Dot indicators */}
      <div style={{
        position: 'absolute',
        bottom: '108px',
        right: '24px',
        zIndex: 2,
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
      }}>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: i === current ? '#FFFFFF' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Children (countdown, etc.) */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1.08) translateX(0); }
          to   { transform: scale(1.0) translateX(-1%); }
        }
      `}</style>
    </div>
  );
}