import React from 'react';

const tabs = [
  { id: 'home',      label: 'Home',    emoji: '🏝️' },
  { id: 'voyage',    label: 'Voyage',  emoji: '🛳️' },
  { id: 'travel',    label: 'Travel',  emoji: '✈️' },
  { id: 'explore',   label: 'Explore', emoji: '📍' },
  { id: 'needtoknow',label: 'Know',    emoji: '❓' },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      paddingBottom: 'env(safe-area-inset-bottom)',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
    }}>
      {tabs.map(tab => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              padding: '10px 4px 12px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 150ms ease',
              position: 'relative',
            }}
          >
            {/* Active indicator */}
            {isActive && (
              <span style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                right: '20%',
                height: '2px',
                background: 'var(--ocean-bright)',
                borderRadius: '0 0 2px 2px',
              }} />
            )}

            {/* Emoji icon */}
            <span style={{
              fontSize: isActive ? '22px' : '20px',
              lineHeight: 1,
              transition: 'all 150ms ease',
              filter: isActive ? 'none' : 'grayscale(30%)',
              transform: isActive ? 'translateY(-1px)' : 'none',
            }}>
              {tab.emoji}
            </span>

            {/* Label */}
            <span style={{
              fontSize: '10px',
              fontWeight: isActive ? '600' : '400',
              color: isActive ? 'var(--ocean-bright)' : 'var(--text-tertiary)',
              letterSpacing: '0.03em',
              transition: 'all 150ms ease',
            }}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}